var path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
      path: __dirname,
      filename: "build/index.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./'),
      path.resolve('./node_modules')
    ]
  }
};
