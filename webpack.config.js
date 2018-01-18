const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const nodeEnv = process.env.NODE_ENV || 'development'

let outputPath
let appName = 'app'
let plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: './internals/index.html',
    filename: 'index.html'
  })
]

// production config
if (nodeEnv === 'production') {
  const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }
  ))

  appName += '.min.js'
  outputPath = path.resolve(__dirname, 'dist')
} else {
  appName += '.js'
  outputPath = path.resolve(__dirname, 'public')
}

// default config
module.exports = {
  entry: './src/client/index.js',

  output: {
    path: outputPath,
    filename: `build/${appName}`
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  plugins

}
