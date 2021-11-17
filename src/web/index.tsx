import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

import { Nav } from "./components/nav";
import { Container } from "./page/container";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <Nav />
      <Container />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
