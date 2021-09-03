import { resolve, dirname } from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import nodeExternals from "webpack-node-externals";

export default {
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  entry: resolve(dirname(""), "app/main/index.ts"),
  target: "electron-main",
  output: {
    filename: "index.js",
    chunkFormat: "module",
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
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  experiments: {
    outputModule: true,
  },
  plugins: [new CleanWebpackPlugin()],
};
