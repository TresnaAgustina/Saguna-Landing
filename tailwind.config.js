/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F98FF",
        secondary: "#FAFAFA",
        text: "#404040",
        p: "#737373",
      },
      boxShadow: {
        button: "0px 15px 25px -8px rgba(79, 152, 255, 0.5)",
        navbar: "0px 10px 20px -15px rgba(0, 0, 0, 0.15)",
        techLogo: "0px 11px 25px -10px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
