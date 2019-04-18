const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ['./index.js'],
  output: {
    path: path.join(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      scope: "components",
      manifest: require("../components/manifest.json"),
      extensions: [".js"]
    })
  ]
};