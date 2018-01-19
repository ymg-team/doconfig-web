import webpack from 'webpack'
import middleware from 'webpack-dev-middleware'
import webpackOptions from '../../../webpack.config'

const compiler = webpack(webpackOptions)

export default middleware(compiler, {})
