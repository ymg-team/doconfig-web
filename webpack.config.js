const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const nodeEnv = process.env.NODE_ENV || 'development'

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
} else {
  appName += '.js'
}

// webpack conf
module.exports = {
  entry: './src/client/index.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `js/${appName}`
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
