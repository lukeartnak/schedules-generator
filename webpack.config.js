var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: './build',
    filename: 'app.js'
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
