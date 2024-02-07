/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Raleway_600SemiBold',
        subtitle: 'Raleway_500Medium',
        body: 'Raleway_400Regular',
        bold: 'Raleway_700Bold',
      }
    },
  },
  plugins: [],
}
