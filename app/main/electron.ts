import { app, BrowserWindow } from "electron";
import ElectronStore from "electron-store";
import path from "path";

let store = new ElectronStore();

function createWindow() {
  store.set("dev_mode", app.isPackaged ? false : true);
  store.set("lib_list", ["a", "n"]);
  console.log(app.isPackaged);
  console.log(app.getLocale());
  console.log(app.getPath("userData"));
  let win = new BrowserWindow({ width: 600, height: 800, frame: false });
  win.loadFile(path.join(__dirname, "../renderer/index.html"));
}

function loadConfig() {
  let language = store.get("language");
  console.log(language);
}

app.on("will-finish-launching", loadConfig);
app.on("ready", createWindow);
