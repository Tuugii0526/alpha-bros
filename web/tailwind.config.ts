import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        MainColor: "#050B20",
        MainWhite: "#FFFFFF",
      },
      fontFamily: {
        Poppins: ["Poppins", "serif"],
        Inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
