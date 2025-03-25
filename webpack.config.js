const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|pdf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
};
