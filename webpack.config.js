const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  mode: 'development', //production
  //entry: { main: path.resolve(__dirname, 'src/app.js') },
  entry: {main: path.resolve(__dirname, 'src/index.tsx')},
  output: {
    path:path.resolve(__dirname, 'dist'),
    //filename: '[name].bundled.js'
    filename: '[name].[contenthash].js',
    clean: true// clean old output js file.
  },
  devtool: 'inline-source-map',
  devServer:{
    static:path.resolve(__dirname, 'dist'),
    port: 5001, //default 8080
    open: true,
    hot: true
  },
  module:{
    rules: [
      {test: /\.css$/, use:['style-loader', 'css-loader']},// loader are inbuilt
      {
        test: /\.js?$/, exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "constants": require.resolve("constants-browserify"),
      "process": require.resolve("process/"),
      "fs": false
    },
  },
  plugins:[
    new HtmlWebPackPlugin({
      title: 'तारामण्डल नेपाल',
      filename: 'index.html',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
    //new NodePolyfillPlugin(),
  ]
}
