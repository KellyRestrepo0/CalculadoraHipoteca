/** @type {import('tailwindcss').Config} */
export default {
  content:  ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
      bgFondo:'#E3F4FC',
      bgResultado:'#133040',
      bgTxt: '#7D99AE',
      bgSubTitle: '#6E797F',
      borderInputs:'#C6D3D6',
      bgBtn:'#D9DB30',
      bgRsultado2:'#0E2431',
      bgHoverInput: '#FAFAE0',
      bgHoverBtn: '#EBEE94'
      }
    },
  },
  plugins: [],
}

