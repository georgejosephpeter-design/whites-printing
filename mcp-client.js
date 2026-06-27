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

function send(method, params = {}) {
  const id = ++msgId;
  const msg = JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n";
  return new Promise((resolve, reject) => {
    pending[id] = { resolve, reject };
    proc.stdin.write(msg);
  });
}

function onData(data) {
  const lines = data.toString().split("\n").filter(Boolean);
  for (const line of lines) {
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
  if (!fs.existsSync(MOCKUP_DIR)) fs.mkdirSync(MOCKUP_DIR, { recursive: true });

  proc = spawn(MCP_SERVER, ["--app", "desktop"], { stdio: ["pipe", "pipe", "pipe"] });
  proc.stdout.on("data", onData);
  proc.stderr.on("data", d => {});

  await send("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "opencode", version: "1.0.0" }
  });
  console.log("[OK] Connected to Pencil MCP");

  // Create the document
  const createResult = await send("batch_design", {
    filePath: PEN_FILE,
    input: {
      create: {
        name: "Whites Printing Services Mockups",
        width: 1440,
        height: "auto"
      }
    }
  });
  console.log("[OK] Created .pen document");

  // Get the schema
  const state = await send("get_editor_state", { include_schema: true });
  console.log("[OK] Got editor state");

  // Get guidelines for creating a web design
  try {
    const guidelines = await send("get_guidelines", {});
    console.log("[OK] Got guidelines");
  } catch (e) {
    console.log("[SKIP] get_guidelines not available");
  }

  // Create pages / frames
  const frames = [
    { name: "Homepage - Desktop"},
    { name: "Homepage - Mobile"},
    { name: "Color Palette"},
    { name: "Components"},
    { name: "Service Cards"},
    { name: "Footer"},
  ];

  for (const frame of frames) {
    try {
      await send("batch_design", {
        filePath: PEN_FILE,
        input: {
          create: {
            parentId: "document",
            name: frame.name,
            width: frame.name.includes("Mobile") ? 375 : 1440,
            height: "auto"
          }
        }
      });
      console.log(`[OK] Created frame: ${frame.name}`);
    } catch (e) {
      console.log(`[ERROR] Frame ${frame.name}: ${e.message}`);
    }
  }

  // Export the color palette page as PNG
  const exportDir = path.join(MOCKUP_DIR, "exports");
  if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir, { recursive: true });

  try {
    const exports = await send("export_nodes", {
      filePath: PEN_FILE,
      nodeIds: ["document"],
      outputDir: exportDir,
      format: "png",
      scale: 2
    });
    console.log("[OK] Exported PNGs:", JSON.stringify(exports));
  } catch (e) {
    console.log("[ERROR] Export failed:", e.message);
  }

  console.log("\n[DONE] .pen file created at:", PEN_FILE);
  proc.kill();
}

main().catch(e => {
  console.error("FATAL:", e);
  if (proc) proc.kill();
  process.exit(1);
});
