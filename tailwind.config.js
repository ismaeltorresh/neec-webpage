/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmo': '#AD1735',
        'primary': {
          'cosmo': '#8A122A',
          'dark': '#380711',
          'medium': '#610D1D',
          'light': '#DB1D43',
          'white': '##FF7084',
        },
        'coolgray': {
          'cosmo': '#577B8A',
          'dark': '#072A38',
          'medium': '#3D5761',
          'light': '#70A0B3',
          'white': '#8AC4DB'
        },
        'secondary': {
          'cosmo': '#12688A',
          'dark': '#072A38',
          'medium': '#0D4961',
          'light': '#1783AD',
          'white': '#1DA5DB'
        }
      },
      fontFamily: {
        Noto: ['Noto Sans', 'sans-serif']
      },
      backgroundImage: {
        'servers': "url('./assets/img/servers.jpeg')",
        'team': "url('./assets/img/team.jpeg')",
        'ing': "url('./assets/img/ingenieros2.png')",
        'licencias': "url('./assets/img/licencias.jpg')",
        'administrados': "url('./assets/img/administrados.jpg')",
        'cloud': "url('./assets/img/cloud.jpg')",
        'somos': "url('./assets/img/somos.jpeg')"
      }
    },
  },
  plugins: [],
}
