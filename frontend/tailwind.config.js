/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '25%': { opacity: '0' },
          '75%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeIn2: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 2.5s ease-in-out forwards',
        fadeIn: 'fadeIn 3s ease-in-out forwards',
        fadeIn2: 'fadeIn2 3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

