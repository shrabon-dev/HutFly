/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source': ['Source Serif 4', 'serif'],
        'inter': ['Inter', ' sans serif'],
      },
      colors: {
        'main': '#0D98FF',
        'text': '#1C1C1C',
        'HalfColor': '#505050',
        'gradient':'linear-gradient(180deg, rgba(8,114,255,1) 0%, rgba(2,80,190,1) 100%);'
      },
      // backgroundImage: {
      //   'banner': "url('/images/banner/banner.png')",
      // }
    },
    screens: {
      'mobile': '300px',
      // => @media (min-width: 640px) { ... }

      'smtablet': '600px',
      // => @media (min-width: 640px) { ... }
      
      'tablet': '800px',
      // => @media (min-width: 640px) { ... }
  
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [],
}
