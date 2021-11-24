const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash].bundle.js",
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        historyApiFallback: true, // Fixing the 'cannot GET /URL' https://ui.dev/react-router-cannot-get-url-refresh/
        port: 9001,
        proxy:{
            "/datasnap/rest":"http://127.0.0.1:8080"
        }
    },
    //target: ['web', 'es5'], // 使其支援 IE 11，但 Proxy 會不支援
    devtool:"eval-cheap-source-map", //source-map
    module: {
        rules: [
            {
                test: /\.(css|scss|less)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
            {
                test: /\.(png|jpg|gif)/,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].[hash].bundle.css',
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            minify:{
                removeComment:true,
                collapseWhitespace:true,
                minifyCSS:true
            },
            favicon: "./public/favicon.ico",
        }),
    ]
}