const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./Input.js"],
  output: {
    path: path.join(__dirname),
    filename: "dll.js",
    library: "components"
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
    new webpack.DllPlugin({
      path: path.join(__dirname, "manifest.json"),
      name: "components"
    })
  ]
};