import { app, BrowserWindow, ipcMain, dialog } from "electron";
import path from "path";
import { store } from "./store";
import { LibDB } from "./lowdb";
import "./ipc";

let libDB = new LibDB(path.join(__dirname, "./db.json"));

function createWindow() {
  let winSize: any;
  winSize = store.get("win.size", {
    x: 0,
    y: 25,
    width: 800,
    height: 800,
  });

  let win = new BrowserWindow({
    x: winSize.x,
    y: winSize.y,
    width: winSize.width,
    height: winSize.height,
    minHeight: 600,
    minWidth: 600,
    frame: false,
    titleBarStyle: "hidden",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

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
