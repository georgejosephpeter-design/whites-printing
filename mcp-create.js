const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const MCP_SERVER = "D:\\Program Files\\Pencil\\resources\\app.asar.unpacked\\out\\mcp-server-windows-x64.exe";
const PROJECT_DIR = "D:\\Development-Projects\\OpenCode\\agentic-website-workflow\\whites-printing";
const MOCKUP_DIR = path.join(PROJECT_DIR, "Generated documents", "04_design", "mockups");
const PEN_FILE = path.join(MOCKUP_DIR, "whites-printing-mockups.pen");

let msgId = 0;
let pending = {};
let proc;
let buf = "";

function send(method, params = {}, isNotification = false) {
  const id = ++msgId;
  const msg = isNotification
    ? JSON.stringify({ jsonrpc: "2.0", method, params }) + "\n"
    : JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n";
  console.log(">>>", method);
  return new Promise((resolve, reject) => {
    if (!isNotification) pending[id] = { resolve, reject };
    proc.stdin.write(msg);
    if (isNotification) resolve(true);
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
        if (msg.error) pending[msg.id].reject(new Error(msg.error.message));
        else pending[msg.id].resolve(msg.result);
        delete pending[msg.id];
      }
    } catch (e) { console.log("[PARSE ERROR]", line.slice(0, 100)); }
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  if (!fs.existsSync(MOCKUP_DIR)) fs.mkdirSync(MOCKUP_DIR, { recursive: true });

  proc = spawn(MCP_SERVER, ["--app", "desktop"], { stdio: ["pipe", "pipe", "pipe"] });
  proc.stdout.on("data", onData);
  proc.stderr.on("data", () => {});

  await send("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "opencode", version: "1.0.0" }
  });
  console.log("[OK] Initialized");

  // notifications/initialized is a notification (no id)
  await send("notifications/initialized", {}, true);
  await sleep(500);
  console.log("[OK] Sent initialized notification");

  // Verify tools
  const tools = await send("tools/list", {});
  console.log("[OK] Tools:", tools.tools.map(t => t.name).join(", "));

  // Create document
  const createResult = await send("batch_design", {
    filePath: PEN_FILE,
    input: { create: { name: "Whites Printing Mockups", width: 1440, height: "auto" } }
  });
  console.log("[OK] Created .pen document:", JSON.stringify(createResult).slice(0, 200));

  // Try to get editor state
  try {
    const state = await send("get_editor_state", { include_schema: true });
    console.log("[OK] Editor state received");
  } catch (e) {
    console.log("[SKIP] get_editor_state:", e.message);
  }

  proc.kill();
  console.log("\n[DONE] .pen file at:", PEN_FILE);
}

main().catch(e => {
  console.error("FATAL:", e.message);
  if (proc) proc.kill();
});
