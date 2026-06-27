const { spawn } = require('child_process');
const fs = require('fs');

const MCP_SERVER = "D:\\Program Files\\Pencil\\resources\\app.asar.unpacked\\out\\mcp-server-windows-x64.exe";
const OUT_FILE = "D:\\Development-Projects\\OpenCode\\agentic-website-workflow\\whites-printing\\mcp-tools-output.json";

let msgId = 0;
let pending = {};
let proc;
let buf = "";

function send(method, params = {}) {
  const id = ++msgId;
  const msg = JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n";
  return new Promise((resolve, reject) => {
    pending[id] = { resolve, reject };
    proc.stdin.write(msg);
  });
}

function onData(data) {
  buf += data.toString();
  const lines = buf.split("\n");
  buf = lines.pop() || "";
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const msg = JSON.parse(line);
      if (msg.id && pending[msg.id]) {
        if (msg.error) pending[msg.id].reject(new Error(msg.error.message + " | Method: " + JSON.stringify({jsonrpc:"2.0",id:msg.id,...msg})));
        else pending[msg.id].resolve(msg);
        delete pending[msg.id];
      }
    } catch (e) { console.log("[PARSE ERROR]", line.slice(0, 200)); }
  }
}

async function main() {
  proc = spawn(MCP_SERVER, ["--app", "desktop"], { stdio: ["pipe", "pipe", "pipe"] });
  proc.stdout.on("data", onData);

  await send("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "opencode", version: "1.0.0" }
  });

  // notifications/initialized
  proc.stdin.write(JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized", params: {} }) + "\n");

  // Wait a bit then get tools
  await new Promise(r => setTimeout(r, 500));

  const fullResp = await send("tools/list", {});
  fs.writeFileSync(OUT_FILE, JSON.stringify(fullResp, null, 2), "utf-8");
  console.log("[OK] Full tools/list response written to", OUT_FILE);

  // Print each tool name and the raw method name from the response
  if (fullResp.result && fullResp.result.tools) {
    for (const t of fullResp.result.tools) {
      console.log("Tool:", t.name);
    }
  }

  // Now try calling batch_design with the exact name from tools list
  const toolNames = fullResp.result.tools.map(t => t.name);
  console.log("\nTrying each tool by name...");
  for (const name of toolNames) {
    try {
      if (name === "get_editor_state") {
        await send(name, { include_schema: true });
      } else if (name === "batch_get") {
        await send(name, { filePath: "test.pen" });
      } else if (name === "batch_design") {
        await send(name, { filePath: "test.pen", input: { create: { name: "test" } } });
      } else {
        // skip tools that require real params
        continue;
      }
      console.log(`  [OK] ${name}`);
    } catch (e) {
      console.log(`  [ERR] ${name}: ${e.message}`);
    }
  }

  proc.kill();
}

main().catch(e => {
  console.error("FATAL:", e.message);
  if (proc) proc.kill();
});
