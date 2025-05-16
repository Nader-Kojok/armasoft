/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B92C9',
          50: '#EBF4FA',
          100: '#D7E9F5',
          200: '#B0D3EB',
          300: '#88BDE1',
          400: '#61A7D7',
          500: '#3B92C9',
          600: '#2F75A1',
          700: '#235879',
          800: '#173B50',
          900: '#0B1D28',
        },
        secondary: '#F49015',
        accent: {
          DEFAULT: '#F49015',
          50: '#FEF3E4',
          100: '#FDE7C9',
          200: '#FBCF94',
          300: '#F9B75E',
          400: '#F6A029',
          500: '#F49015',
          600: '#C37310',
          700: '#92560C',
          800: '#613908',
          900: '#311D04',
        },
        gaming: {
          neon: '#00ff9d',
          cyber: '#ff00ff',
          retro: '#ff6b6b',
        },
        neutral: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}