import { app, BrowserWindow, ipcMain, dialog } from "electron";
import path from "path";
import { store } from "./db/store";
import { libDB } from "./db/lowdb";
import { get_window } from "./window";

import "./ipc";

function createWindow() {
  console.log("lib db: ", libDB);
  let win = get_window();
  win.on("resized", () => {
    let size = win.getContentBounds();
    store.set("win.size", size);
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
