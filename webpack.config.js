module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './build',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {presets: ['react', 'es2015']}
    }]
  }
}
