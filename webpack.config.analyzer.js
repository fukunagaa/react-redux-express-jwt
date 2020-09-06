const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(webpackConfig, {
  plugins: [new BundleAnalyzerPlugin()],
});
