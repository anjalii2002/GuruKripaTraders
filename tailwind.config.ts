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
          DEFAULT: "#FAF6EE",
          light: "#FDFBF7",
          dark: "#F3ECE0",
          card: "#EFE6D5",
        },
        brown: {
          DEFAULT: "#2C1A14",
          light: "#3D2319",
          medium: "#4A2C1D",
          dark: "#1A0F0B",
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
        anton: ['Anton', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
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
