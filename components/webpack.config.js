var path = require("path");
var webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: ["./index.js"],
  output: {
    path: path.join(__dirname),
    filename: "1.js",
    library: "comps"
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
      name: "comps"
    })
  ]
};