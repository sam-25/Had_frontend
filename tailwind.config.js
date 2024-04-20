module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
};
