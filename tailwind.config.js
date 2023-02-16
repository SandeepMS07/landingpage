/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily:{
      'body': "Red Hat Display"
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
