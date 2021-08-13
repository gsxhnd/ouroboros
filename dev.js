import webpack from "webpack";
import webpackConfig from "./webpack/webpack.main.dev.js";

var config = await webpackConfig(mode);
var compiler = webpack(config);

compiler.watch();
