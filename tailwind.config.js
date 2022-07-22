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
          lightTheme: {
            "primary": "#FF1818",
            "secondary": "#018786",
            "accent": "#03DAC6",
            "neutral": "#000000",
            "base-100": "#F0F0F0",
            "info": "#168FFF",
            "success": "#17CB49",
            "warning": "#FF9F2D",
            "error": "#F74141",
          },
          darkTheme: {
            "primary": "#FF1818",
            "secondary": "#018786",
            "accent": "#03DAC6",
            "neutral": "#FFFFFF",
            "base-100": "#000000",
            "info": "#168FFF",
            "success": "#17CB49",
            "warning": "#FF9F2D",
            "error": "#F74141",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
}