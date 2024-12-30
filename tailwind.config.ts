import type {Config} from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },
            colors: {
                primary: {
                    "100": "#c6d8f8",
                    DEFAULT: "#186cff",
                },
                secondary: "#4a3da3",
                black: {
                    "100": "#2d333d",
                    "200": "#15253d",
                    "300": "#7D8087",
                    DEFAULT: "#021531",
                },
                white: {
                    "100": "#f2f7ff",
                    DEFAULT: "#fcfdfe",
                },
            },
            fontFamily: {
                "prompt": ["var(--font-prompt)"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(238, 43, 105)",
            },
        },
    },
    plugins: [animate, typography],
};

export default config;