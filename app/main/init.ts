import os from "os";
import { store } from "./store";
import { app } from "electron";

function initConfig() {
  store.get("locale", app.getLocale());
  store.get("os_platform", os.platform());
}

export {};
