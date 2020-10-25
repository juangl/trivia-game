let path = require("path");
let WebpackAssetsManifest = require("webpack-assets-manifest");

let isEnvDevelopment = process.env.NODE_ENV === "development";

const ROOT_DIR = path.resolve(__dirname, "..");
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const SRC_DIR = resolvePath("src");
const BUILD_DIR = resolvePath("build");

module.exports = {
    mode: isEnvDevelopment ? "development" : "production",
    entry: {
        main: SRC_DIR + "/client.tsx",
        criticalMain: SRC_DIR + "/criticalClient.ts",
    },
    devtool: isEnvDevelopment ? "cheap-module-source-map" : "source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css"],
    },
    output: {
        path: BUILD_DIR,
        // There will be one main bundle, and one file per asynchronous chunk.
        // In development, it does not produce real files.
        filename: isEnvDevelopment
            ? "static/js/[name].bundle.js"
            : "static/js/[name].[contenthash:8].js",
        // There are also additional JS chunk files if you use code splitting.
        chunkFilename: isEnvDevelopment
            ? "static/js/[name].chunk.js"
            : "static/js/[name].[contenthash:8].chunk.js",
        // webpack uses `publicPath` to determine where the app is being served from.
        // It requires a trailing slash, or the file assets will get an incorrect path.
        // We inferred the "public path" (such as / or /my-project) from homepage.
        publicPath: "/",
    },

    module: {
        rules: [
            {
                test: /\.(js|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },

    plugins: [
        // Emit a file with assets paths
        // https://github.com/webdeveric/webpack-assets-manifest#options
        new WebpackAssetsManifest({
            output: `${BUILD_DIR}/asset-manifest.json`,
            publicPath: true,
            writeToDisk: true,
        }),
    ],
};
