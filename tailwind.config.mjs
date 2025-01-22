/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "base": "22px",
      "md": "22px",
      "lg": "28px",
      "xl": "50px",
      "2xl": "62px",
    },
    extend: {
      screens: {
        "tissemyre": "1100px"
      },
      colors: {
        "coral": "#F4A88E",
        "ash": "#E4E4E4"
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("peer-not-empty", "&:not([value=''])")
    }
  ],
};
