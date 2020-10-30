// this files is use to setup  babel for the server
module.exports = (api) => {
    api.cache.using(() => process.env.NODE_ENV);

    let plugins = [
        // deal with css import on the server
        "css-modules-transform",
    ];

    return {
        presets: [
            [
                "@babel/preset-react",
                {
                    runtime: "automatic",
                },
            ],
            [
                "@babel/preset-env",
                {
                    targets: {
                        node: "current",
                    },
                },
            ],
            "@babel/preset-typescript",
        ],
        plugins,
    };
};
