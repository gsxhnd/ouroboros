import { app } from "electron";
import path from "path";
import { store } from "./db/store";
import { get_window } from "./window";
import { Low, JSONFile } from "lowdb";

import "./ipc";

function createWindow(): void {
  let file = new JSONFile("./db.json");
  let db = new Low(file);
  db.read().then(() => {
    console.log(db);
  });

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
