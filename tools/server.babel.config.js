module.exports = (api) => {
    api.cache.using(() => process.env.NODE_ENV);

    let plugins = [
        // deal with css import on the server
        "css-modules-transform",
    ];

    return {
        presets: require("./sharedBabelConfig").presets,
        plugins,
    };
};
