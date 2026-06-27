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

  await send("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "opencode", version: "1.0.0" }
  });

  // Try each tool name variation to see if any work
  const toolVariants = [
    "pencil.batch_design",
    "pencil/batch_design",
    "pencil_batch_design",
    "batchDesign",
    "design",
    "pen_design"
  ];

  for (const name of [...toolVariants]) {
    try {
      const r = await send(name, { filePath: "test.pen", input: "{}" });
      console.log(`[FOUND] ${name} works!`);
    } catch (e) {
      // ignore
    }
  }

  console.log("\nAll tool variants failed. Creating placeholder .pen file.");

  // Create the .pen file path reference anyway
  fs.writeFileSync(PEN_FILE + ".placeholder.txt",
    "Pencil .pen file.\n" +
    "Open in Pencil desktop to create mockups.\n" +
    "Frames to create:\n" +
    "- Homepage - Desktop (1440px)\n" +
    "- Homepage - Mobile (375px)\n" +
    "- Color Palette\n" +
    "- Components\n" +
    "- Service Cards\n"
  );

  console.log("[OK] Reference file created");
  proc.kill();
}

main().catch(e => {
  console.error(e.message);
  if (proc) proc.kill();
});
