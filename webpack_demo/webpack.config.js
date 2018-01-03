const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry:{
        index: [path.resolve(__dirname,'index.js'), path.resolve(__dirname,'app.js')],
        vendor: path.resolve(__dirname, 'vendor.js')
    },
    output:{
        filename:'[name].min.[hash:5].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:'css-loader'
            },{
                test:/\.js$/,
                use:'babel-loader',
                options:{
                    presets:['@babel/preset-env',{
                        targets:{
                            browsers:['>1%','last 2 versions']
                        }
                    }]
                },
                exclude:'/node_modules'
            }
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin()
    ]
}