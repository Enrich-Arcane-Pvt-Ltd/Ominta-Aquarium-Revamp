/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {            
            colors: {
                primary: {
                    100: "#E0FCFF",
                    200: "#B2F5F9",
                    300: "#80EAF3",
                    400: "#22D3EE", // text-cyan-400
                    500: "#0FBACF",
                    600: "#0897A8",
                    700: "#067783",
                    800: "#04555E",
                    900: "#03353A",
                },
                accent: {
                    100: "#F5F5F5",
                    200: "#E5E5E5",
                    300: "#D4D4D4",
                    400: "#A3A3A3",
                    500: "#737373",
                    600: "#525252",
                    700: "#404040",
                    800: "#262626",
                    900: "#171717", // close to black
                },
                light: {
                    100: "#FFFFFF",
                    200: "#FAFAFA",
                    300: "#F4F4F4",
                    400: "#EEEEEE",
                    500: "#E5E5E5",
                    600: "#CCCCCC",
                    700: "#B3B3B3",
                    800: "#999999",
                    900: "#808080",
                },
                error: {
                    100: "#FEECEC",
                    200: "#FDC8C8",
                    300: "#FB9E9E",
                    400: "#F97373",
                    500: "#F43F3F",
                    600: "#DC2626",
                    700: "#B91C1C",
                    800: "#991B1B",
                    900: "#7F1D1D",
                },
                black: "#000000",
                white: "#FFFFFF",
            },
        },
    },
    plugins: [
        
    ],
};