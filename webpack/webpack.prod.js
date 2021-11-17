import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import WebpackMerge from "webpack-merge";

import baseConfig from "./webpack.base.js";

const __dirname = path.dirname("");

const entry = {
  index: path.resolve(__dirname, "src/web/index.tsx"),
};

const htmlWebpackPlugin = Object.keys(entry).map(
  (name) =>
    new HtmlWebpackPlugin({
      inject: "body",
      scriptLoading: "defer",
      template: path.join(__dirname, "resources/template.html"),
      minify: false,
      publicPath: "",
      filename: `index.html`,
      chunks: [name],
    })
);
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].[chunkhash].css",
  chunkFilename: "[id].css",
});

const prodConfig = {
  mode: "production",
  entry,
  module: {
    rules: [],
  },
  output: {
    filename: "index.js",
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist/web"),
    library: {
      type: "module",
    },
  },
  plugins: [miniCssExtractPlugin, ...htmlWebpackPlugin],

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};

export default WebpackMerge.merge(baseConfig, prodConfig);
