/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        secondary: '#FFA000',
        accent: '#FF5252',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'start': '#c55c46',
        'end': '#3980f8',
      }),
    },
  },
  plugins: [],
}

