let path = require("path");
let WebpackAssetsManifest = require("webpack-assets-manifest");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * Resolves a path relative to the project root
 * @param  {...string} args path segments
 */
const resolvePath = (...args) => path.resolve(__dirname, "..", ...args);

/**
 * Returns an flatten array containing the value if the condition passed true
 *
 * @param {boolean} test
 * @param {unknown | unknown[]} value
 */
let addIf = (test, value) =>
    test ? [] : Array.isArray(value) ? value : [value];

const SRC_DIR = resolvePath("src");
const BUILD_DIR = resolvePath("build");
let isEnvDevelopment = process.env.NODE_ENV === "development";

module.exports = {
    mode: isEnvDevelopment ? "development" : "production",
    entry: {
        main: SRC_DIR + "/client.tsx",
        criticalMain: SRC_DIR + "/criticalClient.ts",
        stylesheet: SRC_DIR + "/stylesheet/index.ts",
    },
    devtool: isEnvDevelopment ? "eval-source-map" : "source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
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
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                ident: "postcss",
                                plugins: [
                                    require("tailwindcss"),

                                    ...addIf(!isEnvDevelopment, [
                                        require("autoprefixer"),
                                        require("cssnano")({
                                            preset: "default",
                                        }),
                                    ]),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin(),
        // Emit a file with assets paths
        // https://github.com/webdeveric/webpack-assets-manifest#options
        new WebpackAssetsManifest({
            output: `${BUILD_DIR}/asset-manifest.json`,
            publicPath: true,
            writeToDisk: true,
        }),
    ],
};
