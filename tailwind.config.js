/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#008B99",
          white: "#ffffff",
          grey: "#414651",
        },
      },
    },
    plugins: [],
  }
  