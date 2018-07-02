const gasWebpackPlugin = require('gas-webpack-plugin');
const es3ifyWebpackPlugin = require('es3ify-webpack-plugin');
 
module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/Code.gs'
  },
  plugins: [
    new gasWebpackPlugin,
    new es3ifyWebpackPlugin,
  ]
}