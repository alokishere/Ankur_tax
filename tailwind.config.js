/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F1419",
        emerald: "#10B981",
        "emerald-light": "#D1FAE5",
        "dark-navy": "#0A0E14",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      spacing: {
        "xs": "0.5rem",
        "sm": "1rem",
        "md": "1.5rem",
        "lg": "2rem",
        "xl": "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "soft": "0 4px 20px rgba(0, 0, 0, 0.08)",
        "soft-md": "0 8px 32px rgba(0, 0, 0, 0.12)",
        "soft-lg": "0 12px 48px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
