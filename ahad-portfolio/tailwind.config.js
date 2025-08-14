/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        card: "#0f172a",
        accent: "#22d3ee",
        soft: "#93c5fd",
      },
      fontFamily: {
        display: ['"Poppins"', "ui-sans-serif", "system-ui"],
        body: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 10px 30px rgba(34,211,238,.25)",
      },
    },
  },
  plugins: [],
};
