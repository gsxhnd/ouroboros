import { app, ipcMain, dialog } from "electron";

ipcMain.on("quit", () => {
  app.quit();
});

ipcMain.on("show-select-lib", () => {
  dialog.showOpenDialog({ properties: ["openDirectory"] }).then((result) => {
    console.log(result.filePaths[0]);
  });
});
