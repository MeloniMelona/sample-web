const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    "mode": "development",
    "target": "es5",
    "entry": {
        "main": {
            "import": "./src/main.ts",
            "filename": "bundle.js"
        }
    },
    "output": {
        "path": path.resolve(__dirname, "dist"),
        "publicPath": "/"
    },
    "resolve": {
    },
    "module": {
        "rules": [
            {
                "test": /\.(js|ts)$/,
                "exclude": /node_modules/,
                "use": [
                    {
                        "loader": "babel-loader",
                        "options": {
                            "presets": [
                                ["@babel/preset-env", {}],
                                ["@babel/preset-typescript", {
                                    "allExtensions": true
                                }]
                            ],
                            "plugins": []
                        }
                    }
                ]
            },
            {
                "test": /\.css$/,
                "use": [
                    {
                        "loader": "style-loader"
                    },
                    {
                        "loader": "css-loader"
                    }
                ]
            },
            {
                "test": /\.vue$/,
                "exclude": /node_modules/,
                "use": [
                    {
                        "loader": "vue-loader"
                    }
                ]
            },
            {
                "test": /\.(eot|ttf|woff|woff2)$/,
                "use": [
                    {
                        "loader": "file-loader"
                    }
                ]
            }
        ]
    },
    "plugins": [
        new HtmlWebpackPlugin({
            "template": "./src/index.html",
            "filename": "index.html",
            "publicPath": "/"
        }),
        new CleanWebpackPlugin({}),
        new VueLoaderPlugin()
    ],
    "devServer": {
        "port": 80,
        "historyApiFallback": true
    }
};