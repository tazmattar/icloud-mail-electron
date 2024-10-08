const path = require('path');

module.exports = {
  entry: './index.js', // Entry point for your Electron app
  output: {
    filename: 'bundle.js', // The name of the bundled file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  target: 'electron-main', // Specify Electron as the target
  mode: 'production', // This enables minification and other optimizations
  module: {
    rules: [
      {
        test: /\.js$/, // Apply to all JavaScript files
        exclude: /node_modules/, // Exclude dependencies in node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile modern JavaScript
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // Resolve these extensions
  },
};
