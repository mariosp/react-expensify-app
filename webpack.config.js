const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env)=>{
    const isProduction = env == "production";

    const currentPath = path.join(__dirname);
    const basePath = currentPath + '/.env';
    // Check if the .env exists
    const fileEnv = fs.existsSync(basePath) ?
        dotenv.config({ path: basePath }).parsed
        :
        process.env;
    // Set the path parameter in the dotenv config
    // const fileEnv = dotenv.config({ path: finalPath }).parsed;

    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});
    
    return{
        entry : ['babel-polyfill','./src/app.js'],
        output: {
            path: path.join(__dirname,'public','dist') ,
            filename: 'bundle.js'
        },
        module : {
            rules: [{
                loader:'babel-loader',
                test: /\.js$/,
                exclude:/node_modules/
            },{
            test:/\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader',
                 options: {
                      sourceMap: true 
                    } 
                },
                { loader: 'sass-loader',
                 options: {
                      sourceMap: true 
                    } 
                }
            ] 
            }]
        },
        plugins:[
            new MiniCssExtractPlugin({
                filename: "styles.css"
            }),
            new webpack.DefinePlugin(envKeys)
        ],    
        devtool: isProduction? 'source-map' : "inline-source-map",
    
        devServer:{
                contentBase: path.join(__dirname,'public') ,
                historyApiFallback : true,
                publicPath: '/dist/'
        }
    
    }


    } //end arrow function
