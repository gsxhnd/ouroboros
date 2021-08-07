const path = require("path");
const baseConfig = require("./webpack.base.js");
const webpackMerge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const mainProdConfig = {
  mode: "production",
  entry: path.resolve(__dirname, "../app/main/electron.ts"),
  target: "electron-main",
  output: {
    filename: "electron.prod.js",
    path: path.resolve(__dirname, "../dist/main"),
  },
  // externals: [nodeExternals()],
  optimization: {
    splitChunks: {
      chunks: "initial",
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: "[name]-bundle.js",
        },
      },
    },
  },
};

module.exports = webpackMerge.merge(baseConfig, mainProdConfig);
