import React from "react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { ipcRenderer } from "electron";

import "./nav.less";

class Nav extends React.Component {
  render() {
    return (
      <header className="App-header">
        <PrimaryButton text="Quit " onClick={this.quit} />
        <PrimaryButton text="Select" onClick={this.show} />
      </header>
    );
  }
  quit() {
    ipcRenderer.sendSync("quit");
  }

  show() {
    ipcRenderer.sendSync("show-select-lib");
  }
}

export { Nav };
