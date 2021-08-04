import { app, BrowserWindow } from "electron";

function createWindow() {
  let win = new BrowserWindow({ width: 600, height: 800 });
  console.log(process.versions.chrome);
  console.log(process.versions.electron);

  win.loadFile("index.html");
}

app.on("ready", createWindow);
