import React from "react";

import { ContainerEditor } from "../components/container_editor";
import { ContainerExplorer } from "../components/container_explorer";
import { ContainerInfo } from "../components/container_info";

import "./container.less";

class Container extends React.Component {
  constructor(prop: React.ReactPropTypes) {
    super(prop);
  }
  render() {
    return (
      <div className="container">
        <ContainerExplorer />
        <ContainerEditor />
        <ContainerInfo />
      </div>
    );
  }
}

export { Container };
