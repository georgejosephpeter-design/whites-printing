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

function send(method, params = {}) {
  const id = ++msgId;
  const msg = JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n";
  console.log(">>>", method);
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
        if (msg.error) pending[msg.id].reject(new Error(msg.error.message));
        else pending[msg.id].resolve(msg.result);
        delete pending[msg.id];
      }
    } catch (e) {}
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  if (!fs.existsSync(MOCKUP_DIR)) fs.mkdirSync(MOCKUP_DIR, { recursive: true });

  proc = spawn(MCP_SERVER, ["--app", "desktop"], { stdio: ["pipe", "pipe", "pipe"] });
  proc.stdout.on("data", onData);

  // Initialize
  await send("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "opencode", version: "1.0.0" }
  });
  console.log("[OK] Initialized");

  // Send initialized notification (no id = notification)
  proc.stdin.write(JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized", params: {} }) + "\n");
  await sleep(300);
  console.log("[OK] Initialized notification sent");

  // Get the schema first to know how to use batch_design
  console.log("\n--- Getting editor state with schema ---");
  try {
    const state = await send("get_editor_state", { include_schema: true });
    console.log("[OK] Editor state received");
    // Save the schema for reference
    fs.writeFileSync(path.join(MOCKUP_DIR, "pencil-schema.json"), JSON.stringify(state, null, 2), "utf-8");
  } catch (e) {
    console.log("[WARN] get_editor_state failed:", e.message);
  }

  // Create the document
  console.log("\n--- Creating .pen document ---");
  const inputStr = JSON.stringify({ create: { name: "Whites Printing Mockups", width: 1440, height: "auto" } });
  const createResult = await send("batch_design", {
    filePath: PEN_FILE,
    input: inputStr
  });
  console.log("[OK] Document created:", JSON.stringify(createResult).slice(0, 300));

  // Now start adding frames
  const frames = [
    { name: "Homepage - Desktop", width: 1440 },
    { name: "Homepage - Mobile", width: 375 },
    { name: "Color Palette", width: 1440 },
    { name: "Components", width: 1440 },
    { name: "Service Cards", width: 1440 }
  ];

  for (const frame of frames) {
    try {
      const fInput = JSON.stringify({
        create: {
          parentId: "document",
          name: frame.name,
          width: frame.width,
          height: "auto"
        }
      });
      const result = await send("batch_design", {
        filePath: PEN_FILE,
        input: fInput
      });
      console.log(`[OK] Frame created: ${frame.name}`);
    } catch (e) {
      console.log(`[ERR] Frame ${frame.name}: ${e.message}`);
    }
  }

  console.log("\n[DONE] .pen file at:", PEN_FILE);
  console.log("[INFO] Open in Pencil desktop to add design elements and export PNGs");
  proc.kill();
}

main().catch(e => {
  console.error("FATAL:", e.message);
  if (proc) proc.kill();
});
