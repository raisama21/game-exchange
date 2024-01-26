/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {
            colors: {
                hbp: "#DCB410",
                "hbn-10": "#FFFFFF",
                "hbn-20": "#FBFBF9",
                "hbn-80": "#302C2C",
                "hbn-100": "#060606",
                "hbn-101": "#EAE8DD",
            },
        },
    },
    plugins: [],
};
