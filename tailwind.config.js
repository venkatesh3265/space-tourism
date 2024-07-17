/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['38px', '58px'],
      '6xl': ['56px', '21.38px'],
      '8xl': ['96px', '106px'],
      '10xl': ['150px', '106px']
    },
    extend: {
      fontFamily: {
        Bellefair: ['Bellefair', 'sans-serif'],
        Barlow_Condensed: ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        'primary': "#0B0D17",
         'secondary': "#D0D6F9",
         'white_custom': "#FFFFFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'home-desktop': "url('assets/home/background-home-desktop.jpg')",
        'home-mobile': "url('assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('assets/home/background-home-tablet.jpg')",
        'destination-desktop': "url('assets/destination/background-destination-desktop.jpg')",
        'destination-mobile': "url('assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('assets/destination/background-destination-tablet.jpg')",
        'crew-desktop': "url('assets/crew/background-crew-desktop.jpg')",
        'crew-mobile': "url('assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('assets/crew/background-crew-tablet.jpg')",
        'technology-desktop': "url('assets/technology/background-technology-desktop.jpg')",
        'technology-mobile': "url('assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('assets/technology/background-technology-tablet.jpg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
})