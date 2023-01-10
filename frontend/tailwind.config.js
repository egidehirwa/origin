/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontSize: {
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
        },
        fontFamily: {
            primaryFont: ["Righteous", "cursive"],
            secondaryFont: ["Montserrat Alternates", "sans-serif"],
        },
        extend: {
            colors: {
                darkgreen: "#394843",
                greenish: "#4F645C",
                peps: "#5E3239",
                creemish: "#DAC2A2",
                lighcream: "#EBE3D5",
            },
        },
    },
    plugins: [],
};
