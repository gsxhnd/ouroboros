import { resolve, dirname } from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import nodeExternals from "webpack-node-externals";

export default {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  entry: resolve(dirname(""), "app/main/electron.ts"),
  target: "electron-main",
  output: {
    filename: "electron.js",
    chunkFormat: "module",
    libraryTarget: "commonjs-module",
    library: {
      type: "module",
    },
    path: resolve(dirname(""), "dist/main"),
  },
  externals: [nodeExternals()],
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  experiments: {
    outputModule: true,
  },
  plugins: [new CleanWebpackPlugin()],
};
