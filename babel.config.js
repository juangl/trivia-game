module.exports = (api) => {
    api.cache(true);
    let isServer = process.env.BABEL_ENV === "node";

    let presets = [
        [
            "@babel/preset-react",
            {
                runtime: "automatic",
            },
        ],
        "@babel/preset-env",
        "@babel/preset-typescript",
    ];

    let plugins = [
        // deal with css import on the server
        ...(isServer ? ["css-modules-transform"] : []),
    ];

    return {
        presets,
        plugins,
    };
};
