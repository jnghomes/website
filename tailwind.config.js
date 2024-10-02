/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primaryAccent: "var(--primaryAccent)",
        secondaryAccent: "var(--secondaryAccent)",
        highlight: "var(--highlight)",
        text: "var(--text)",
        textDark: "var(--textDark)",
      },
    },
  },
  plugins: [],
};
