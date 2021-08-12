import React from "react";
import { editor } from "monaco-editor";

import "./editor.less";

class Editor extends React.Component {
  constructor(props: React.ReactPropTypes) {
    super(props);
    this.state = { date: null };
  }
  render() {
    return <div className="monaco" id="monaco"></div>;
  }
  componentDidMount() {
    let mNode = document.getElementById("monaco");
    if (mNode === null) {
      return;
    }
    const monacoInstance = editor.create(mNode, {
      value: `# Test)`,
      language: "markdown",
    });
  }
  componentWillUnmount() {
    this.setState({
      date: null,
    });
  }
}

export { Editor };
