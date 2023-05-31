const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    plugin(function ({ addBase, addUtilities }) {
      // Add base styles or utilities here
    }),
  ],
};
