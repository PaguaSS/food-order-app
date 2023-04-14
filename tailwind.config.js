/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#8a2b06",
          "secondary": "#4d1601",
          "accent": "#b94517",
          "neutral": "#8a2b06",
          "base-100": "#ffffff",
          "info": "#93E7FB",
          "success": "#81CFD1",
          "warning": "#EFD7BB",
          "error": "#E58B8B",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
}
