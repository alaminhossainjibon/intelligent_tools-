module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#173205",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#2E0A03",
          "base-100": "#1E0a02",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
