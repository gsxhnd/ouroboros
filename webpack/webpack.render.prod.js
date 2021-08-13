const path = require("path");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const entry = {
  index: path.join(__dirname, "../app/renderer/index.tsx"),
};

const htmlWebpackPlugin = Object.keys(entry).map(
  (name) =>
    new HtmlWebpackPlugin({
      inject: "body",
      scriptLoading: "defer",
      template: path.join(__dirname, "../resources/template.html"),
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

const proConfig = {
  mode: "production",
  target: "electron-renderer",
  entry,
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../dist/renderer"),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },

          {
            loader: "css-loader",
            options: { sourceMap: false },
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
  plugins: [miniCssExtractPlugin, ...htmlWebpackPlugin],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new MonacoWebpackPlugin()],
  },
};

module.exports = webpackMerge.merge(baseConfig, proConfig);
