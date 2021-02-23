const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        sans: ['Lora', ...defaultTheme.fontFamily.sans],
        mono: ['Oswald', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        black: '#162127',
        primary: '#33D3DC',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}
