import electron from "../../node_modules/@electron/get/dist/esm";
const { app } = electron;

import path from "path";

import { get_window } from "./window.js";
import "./ipc.js";

function createWindow(): void {
  let win = get_window();
  win.on("resized", () => {
    let size = win.getContentBounds();
  });
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../renderer/index.html"));
  } else {
    process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
    win.loadURL("http://127.0.0.1:4000");
  }
}

app.on("will-finish-launching", () => {});
app.on("ready", createWindow);
