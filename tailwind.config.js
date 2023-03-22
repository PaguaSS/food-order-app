/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary' : '#383838',
      'secondary': {
        'main' : '#8a2b06',
        'darker' : '#4d1601',
        'lighter' : '#b94517'
      },
      'white': '#ffffff',
      'gray' : '#bbbbbb'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
