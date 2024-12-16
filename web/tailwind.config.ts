import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      grayscale: {
        50: "50%",
      },
      colors: {
        MainColor: "#050B20",
        MainWhite: "#FFFFFF",
        MainGray: "#E8E8E8",
        MainLBlue: "#4A6A91",
      },
      fontFamily: {
        Poppins: ["Poppins", "serif"],
        Inter: ["Inter", "serif"],
        Roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
