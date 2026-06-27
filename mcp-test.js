const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const MCP_SERVER = "D:\\Program Files\\Pencil\\resources\\app.asar.unpacked\\out\\mcp-server-windows-x64.exe";

let msgId = 0;
let pending = {};
let proc;

function send(method, params = {}) {
  const id = ++msgId;
  const msg = JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n";
  console.log(">>>", method, JSON.stringify(params).slice(0, 100));
  return new Promise((resolve, reject) => {
    pending[id] = { resolve, reject };
    proc.stdin.write(msg);
  });
}

function onData(data) {
  const lines = data.toString().split("\n").filter(Boolean);
  for (const line of lines) {
    console.log("<<<", line.slice(0, 200));
    try {
      const msg = JSON.parse(line);
      if (msg.id && pending[msg.id]) {
        if (msg.error) pending[msg.id].reject(new Error(msg.error.message));
        else pending[msg.id].resolve(msg.result);
        delete pending[msg.id];
      }
    } catch (e) {}
  }
}

async function main() {
  proc = spawn(MCP_SERVER, ["--app", "desktop"], { stdio: ["pipe", "pipe", "pipe"] });
  proc.stdout.on("data", onData);
  proc.stderr.on("data", d => {});

  const init = await send("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "opencode", version: "1.0.0" }
  });
  console.log("\n[OK] Initialized. Server:", init.serverInfo.name, init.serverInfo.version);

  // Try tools/list - this worked before
  const tools = await send("tools/list", {});
  console.log("\n[OK] Tools available:", tools.tools.map(t => t.name).join(", "));

  proc.kill();
  console.log("\n[DONE]");
}

main().catch(e => {
  console.error("FATAL:", e.message);
  if (proc) proc.kill();
});
