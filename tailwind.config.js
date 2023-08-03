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
        


"base-100": "#FFFFFF",
        


"info": "#93E7FB",
        


"success": "#2ECC71",
        


"warning": "#E67E22",
        


"error": "#E74C3C",
        },
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}
