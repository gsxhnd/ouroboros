import { BrowserWindow } from "electron";
import { store } from "./db/store.js";

function get_window(): BrowserWindow {
  let winSize: any;
  winSize = store.get("win.size", {
    x: 0,
    y: 25,
    width: 800,
    height: 800,
  });

  return new BrowserWindow({
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
}

export { get_window };
