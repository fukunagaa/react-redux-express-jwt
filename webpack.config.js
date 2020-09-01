const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  // エントリポイントの定義
  entry: {
    app: [path.join(__dirname, "src", "client", "index.js")],
  },
  // 出力先の定義
  output: {
    path: path.join(__dirname, "public"),
    filename: path.join("javascripts", "[name].js"),
  },
  resolve: {
    // モジュール解決定義
    modules: ["node_modules", path.resolve(__dirname, "src", "client")],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
              plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }, { loader: "sass-loader" }],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: [path.join(__dirname, "src", "client", "assets")],
        loader: "file-loader?name=public/[name].[ext]",
      },
      {
        test: /\.(jpg|png)$/,
        loaders: "url-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join("src", "client", "index.html"),
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: path.join("stylesheets", "styles.css"),
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
};
