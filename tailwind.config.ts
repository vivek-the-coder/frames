import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                "luxury-h1": ["120px", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
                "luxury-h2": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "luxury-h3": ["24px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
                "luxury-body": ["20px", { lineHeight: "1.7" }],
                "luxury-sm": ["15px", { lineHeight: "1.6" }],
            },
            spacing: {
                "luxury-section": "200px",
                "luxury-gap-lg": "120px",
                "luxury-gap-md": "60px",
                "luxury-gap-sm": "40px",
            },
            borderRadius: {
                "luxury-container": "28px",
                "luxury-card": "24px",
                "luxury-button": "100px",
            },
            colors: {
                "luxury-white-10": "rgba(255, 255, 255, 0.1)",
                "luxury-white-60": "rgba(255, 255, 255, 0.6)",
                "luxury-accent": "#00ff41",
            },
        },
    },
    plugins: [],
} satisfies Config;
