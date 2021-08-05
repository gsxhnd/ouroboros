const path = require("path");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base.js");

const devConfig = {
  mode: "development",
  target: "electron-renderer",
  devtool: "inline-source-map",
  entry: {
    index: path.resolve(__dirname, "../app/renderer/index.tsx"),
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 5000,
            mimetype: "image/svg+xml",
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    host: "127.0.0.1",
    port: 4000,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../resources/template.html"),
      filename: path.resolve(__dirname, "../dist/index.html"),
      chunks: ["index"],
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
