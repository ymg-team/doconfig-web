require('dotenv').config()

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

// set client environment variabels
plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    FIREBASE_APIKEY: JSON.stringify(process.env.FIREBASE_APIKEY),
    FIREBASE_AUTHDOMAIN: JSON.stringify(process.env.FIREBASE_AUTHDOMAIN),
    FIREBASE_DATABASEURL: JSON.stringify(process.env.FIREBASE_DATABASEURL),
    FIREBASE_PROJECTID: JSON.stringify(process.env.FIREBASE_PROJECTID),
    FIREBASE_STORAGEBUCKET: JSON.stringify(process.env.FIREBASE_STORAGEBUCKET),
    FIREBASE_MESSAGINGSENDERID: JSON.stringify(process.env.FIREBASE_MESSAGINGSENDERID)
  }
}))

// production config
if (nodeEnv === 'production') {
  // webpack copy
  const CopyWebpackPlugin = require('copy-webpack-plugin')
  // minify appjs
  const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  // copy assets to dist
  plugins.push(new CopyWebpackPlugin([
    { from: 'public' }
  ]))

  // set js bundle name
  appName += '.min.js'
  outputPath = path.resolve(__dirname, 'dist')
} else {
  // set js bundle name
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
