const path = require("path");
const baseConfig = require("./webpack.base.js");
const webpackMerge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const mainConfig = {
  entry: path.resolve(__dirname, "../app/main/electron.ts"),
  target: "electron-main",
  output: {
    filename: "electron.js",
    path: path.resolve(__dirname, "../dist/main"),
  },
  externals: [nodeExternals()],
  devtool: "inline-source-map",
  mode: "development",
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
