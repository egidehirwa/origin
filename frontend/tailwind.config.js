/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        fontSize: {
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            xxl: "2rem",
        },
        fontFamily: {
            primaryFont: ["Righteous", "cursive"],
            secondaryFont: ["Montserrat Alternates", "sans-serif"],
        },
        extend: {
            colors: {
                darkgreen: "#394843",
                greenish: "#4F645C",
                lightgreen: "#7b8b7f",
                peps: "#5E3239",
                creemish: "#DAC2A2",
                lightcream: "#EBE3D5",
            },
            borderRadius: {
                default: "4px",
                large: "12px",
            },
            padding: {
                sm: "8px",
                md: "16px",
                lg: "24px",
                xl: "48px",
            },
            spacing: {
                sm: "8px",
                md: "16px",
                lg: "24px",
                xl: "48px",
            },
            maxWidth: {
                1: "100%",
                "3/4": "75%",
                "1/2": "50%",
                "1/4": "25%",
                "1/5": "20%"
            },
            maxHeight: {
                1: "100%",
                "3/4": "75%",
                "1/2": "50%",
                "1/4": "25%",
                "1/5": "20%"
            },
            minWidth: {
                1: "100%",
                "3/4": "75%",
                "1/2": "50%",
                "1/4": "25%",
                "1/5": "20%"
            }
        },
    },
    plugins: [],
};

//*  GRADIENT EXTRA INFO

// bg-gradient-to-tr from-lime-900 to-yellow-50
// bg-gradient-to-tr from-teal-800 to-orange-100
// bg-gradient-to-tr from-cyan-900 to-stone-400
