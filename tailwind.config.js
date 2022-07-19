module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: [
        {
          tempcust: {
            "primary": "#FF1818",
            "secondary": "#172774",
            "accent": "#ebf43a",
            "neutral": "#090910",
            "base-100": "#F0F0F0",
            "info": "#88E0EF",
            "success": "#207E4A",
            "warning": "#FFC300",
            "error": "#FF6B6B",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
}