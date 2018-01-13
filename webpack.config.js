const webpack = require('webpack')
const path = require('path')

const node_env = process.env.NODE_ENV || 'development'

let app_name = 'app'
let plugins = []

// production config
if(node_env == 'production')
{
    const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
            }
        }
    ))

    app_name += '.min.js'

}else 
{
    app_name += '.js'
}

// webpack conf
module.exports = {
    entry: './src/client/index.js',
    
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: app_name
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


