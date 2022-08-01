module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'], // quando for gerado a versao final, sera utilizado apenas arquivos usado no projeto
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }