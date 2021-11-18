const path = require('path')

const config = {
  entry: './index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'build/')
  },
  module:{
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  }
}

module.exports = config