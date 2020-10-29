module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: ["./src/**/*.tsx"],
        options: {
            whitelist: [],
        },
    },
    theme: {
        extend: {
            colors: {
                primary: "#e09",
                secondary: "#92e",
                tertiary: "#70f",
                contrast: "#161616",
            },
            boxShadow: {
                "inner-white": `inset 0 0 0 1px rgba(255,255,255,0.06)`,
            },
            fontFamily: {
                display: ["Bebas Neue"],
                body: ["Roboto Slab"],
            },

            transitionProperty: {
                width: "width",
            },
        },
    },
    variants: {
        pointerEvents: ["disabled"],
    },
    plugins: [],
};
