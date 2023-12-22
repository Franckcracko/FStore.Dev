/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Istok Web', 'sans-serif']
    },
    extend: {
      colors: {
        primary_color: { 600: '#181818', 400: '#434040', 200: '#808080' },
        secondary_color: '#3483FA'
      }
    }
  },
  plugins: []
}
