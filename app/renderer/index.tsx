import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

import { Editor } from "./components/editor";
import { Nav } from "./components/nav";
import { Explorer } from "./components/explorer";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <Nav />
      <div className="container">
        <Explorer />
        <Editor />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
