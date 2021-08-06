import { app, BrowserWindow } from "electron";
import path from "path";
import { store } from "./store";

function createWindow() {
  let winSize: any;
  winSize = store.get("win.size", {
    x: 0,
    y: 25,
    width: 600,
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
  });

  win.on("resized", () => {
    let size = win.getContentBounds();
    store.set("win.size", size);
  });
  win.loadFile(path.join(__dirname, "../renderer/index.html"));
}

app.on("will-finish-launching", () => {});
app.on("ready", createWindow);
