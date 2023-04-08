const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const  HtmlWebpackPlugin  =  require ( 'html-webpack-plugin' )
const Dotenv = require('dotenv-webpack');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

let nodeModules = {};

fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

const frontConfig = {
    mode: "production",
    devtool: argv.sourceMap != null ? "source-map" : false, // option controls how source maps are generated (affects on build speed dramatically): https://v4.webpack.js.org/configuration/devtool/
    entry: ["@babel/polyfill","./client/src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: '/'
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        //host: 'local-ip',
        //host: '192.168.0.102', // Required for docker
        //allowedHosts: "all",
        port: 3000,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "./dist")
        },
        compress: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: "./client/public/index.html",
            favicon: './client/public/favicon.ico'
        }),
        new CompressionPlugin({
            // optional: it creates gzipped (compressed) files in '[path].gz[query]'
            threshold: common.filesThreshold, // (bytes). Only assets bigger than this size are processed
        }),
        new CleanWebpackPlugin(),
        new Dotenv({
            path: path.resolve(__dirname, './client/.env'),
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(less|sass|scss)$/i,
                use: ["style-loader", "css-loader","less-loader","sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            },
            {
                test: /\.m?(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets:  [ "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}], ]
                    }
                }
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                // default webpack plugin for js-optimization which should be configured: https://v4.webpack.js.org/configuration/optimization/#optimizationminimizer
                // speedest alternative of UglifyJS (it improves minifying js files)
                test: /\.m?js(\?.*)?$/i,
                // exclude: /\.m?js(\?.*)?$/i, // uncomment if we don't need uglifying (for debug purpose)
                extractComments: false, // disable extracting comments to a different file
                terserOptions: {
                    toplevel: true, // https://github.com/terser/terser#minify-options
                    output: {
                        comments: false, // remove comments from files
                    },
                    mangle: {
                        safari10: true, // for preventing Safari 10/11 bugs in loop scoping and await
                    },
                    compress: { pure_funcs: ["console.info", "console.debug", "console.warn"] }, // remove this functions when their return values are not used
                },
            }),
            new CssMinimizerPlugin({}),
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
/*const backConfig = {
    mode: "development",
    target: "node",
    entry: ["@babel/polyfill","./server/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "back[name].[hash].js",
    },
    devServer: {
      port:5000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv({
            systemvars: true,
            path: path.resolve(__dirname, './server/.env'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets:  [ "@babel/preset-env" ]
                    }
                }
            }
        ],
    },
    externals:
        ['.js', '.json', 'jsx',"pg", "sqlite3", "pg-hstore",
            {sequelize: "sequelize"},
            {express: 'express'},nodeExternals()],
}*/
module.exports = [frontConfig]

