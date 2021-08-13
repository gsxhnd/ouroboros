import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

import { Nav } from "./components/nav";
import { ContainerEditor } from "./components/container_editor";
import { ContainerExplorer } from "./components/container_explorer";
import { ContainerInfo } from "./components/container_info";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <Nav />
      <div className="container">
        <Explorer />
        <ContainerEditor />
        <ContainerInfo />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
