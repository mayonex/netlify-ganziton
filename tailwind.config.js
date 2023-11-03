/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "signiture-red": "FF6550",
    },
    mode: "jit",
  },
  plugins: [],
};
