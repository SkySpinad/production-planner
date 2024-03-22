const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
  console.log("Run with AWS Env Configuration: " ,env.aws)
  aws_env = env.aws
  return ({
  mode: 'production',
  plugins: [
    new Dotenv({
      path: `./config.${aws_env === "production" ? "prd" : aws_env === "nonprod" ?"nonprod":"dev"}.env`,
    }),
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html", // to import index.html file inside index.js
    }),
    new ModuleFederationPlugin({
      name: "productionPlanner",
      filename: "productionplanner.js",
      exposes: {
        "./ProductionPlannerPage": "./src/pages/ProductionPlannerPage"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    })
  ],
  devServer: {
    client: {
      overlay: true
    },
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
});
}