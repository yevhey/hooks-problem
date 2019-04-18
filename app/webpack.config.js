var path = require("path");
var webpack = require("webpack");
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
      scope: "aaa",
      manifest: require("../components/manifest.json"),
      extensions: [".js"]
    })
  ]
};