module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                primary: "#e09",
                secondary: "#92e",
                contrast: "#161616",
            },
            boxShadow: {
                "inner-white": `inset 0 0 0 1px rgba(255,255,255,0.06)`,
            },
            fontFamily: {
                display: ["Bebas Neue"],
                body: ["Roboto Slab"],
            },
        },
    },
    variants: {},
    plugins: [],
};
