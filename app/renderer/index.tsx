import React from 'react';
import ReactDOM from 'react-dom'
import "./index.less";
import {PrimaryButton } from '@fluentui/react/lib/Button';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <PrimaryButton text="Button"/>
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);