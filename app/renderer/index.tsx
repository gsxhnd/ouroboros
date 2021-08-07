import React from 'react';
import ReactDOM from 'react-dom'
import "./index.less";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { ipcRenderer  } from "electron";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <PrimaryButton text="Button" onClick={quit} />
        <PrimaryButton text="Select" onClick={show} />
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

function quit() {
  ipcRenderer.sendSync("quit");
}

function show() {
  ipcRenderer.sendSync("show-select-lib");
}