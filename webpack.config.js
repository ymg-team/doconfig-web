require('dotenv').config()

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const nodeEnv = process.env.NODE_ENV || 'development'

let outputPath
let plugins = [
  // generate indexed.html for static site
  new HtmlWebpackPlugin({
    inject: true,
    template: './internals/index.html',
    filename: 'index.html'
  }),

  // added vendor chunk
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: process.env.NODE_ENV === 'production' ? 'vendor.[hash].js' : 'vendor.js',
    minChunks: Infinity
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
  outputPath = path.resolve(__dirname, 'dist')
} else {
  // set js bundle name
  outputPath = path.resolve(__dirname, 'public/build')
}

// default config
module.exports = {
  entry: {
    app: './src/client/index.js',
    vendor: ['vue', 'vuex', 'vue-router', 'firebase', 'string-manager']
  },

  output: {
    path: outputPath,
    filename: process.env.NODE_ENV === 'production' ? '[name].[hash].js' : '[name].js',
    chunkFilename: '[name].js'
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
