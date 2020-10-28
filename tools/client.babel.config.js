module.exports = (api) => {
    api.cache.using(() => process.env.NODE_ENV);

    let plugins = [];

    return {
        presets: require("./sharedBabelConfig").presets,
        plugins,
    };
};
