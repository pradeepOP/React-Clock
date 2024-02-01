/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#4B0082",
        "secondary-color": "#00D2FC",
        "tertiary-color": "#009EFA",
        "fourth-color": "#1DFAD6",
      },
    },
  },
  plugins: [],
};
