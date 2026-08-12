import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: "#FAF6F0",
          light: "#FFFDF9",
          dark: "#F3ECE0",
          card: "#EFE6D5",
        },
        brown: {
          DEFAULT: "#1C1310",
          light: "#2C1A14",
          medium: "#3D2319",
          dark: "#120B09",
        },
        burntOrange: {
          DEFAULT: "#C85A17",
          hover: "#B44E11",
          dark: "#943C0B",
          light: "#E87C38",
        },
        goldAccent: {
          DEFAULT: "#DAA520",
          light: "#EAD07C",
        }
      },
      fontFamily: {
        brand: ['Inter', 'sans-serif'],
        cinzel: ['Inter', 'sans-serif'],
        anton: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        hindi: ['Rozha One', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tickerReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        tickerReverse: 'tickerReverse 25s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
