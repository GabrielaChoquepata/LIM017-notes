/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,png}"],
  theme: {
    extend: {
      fontFamily: {
        "LouisGeorge":['Louis George Café', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'fondoEureka': "url('https://i.postimg.cc/5ykHV7W5/fondo-Eureka.png')",
      }),
      colors: {
        'colorApp' : '#rgba(73, 160, 205, 1)'
      }
    },
  },
  plugins: [],
}
