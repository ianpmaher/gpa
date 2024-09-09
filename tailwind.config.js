/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      sans: ["system-ui", "sans-serif"],
      serif: ["Merriweather", "serif"],
      lexend: ["Lexend", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        gradientlight:
          "radial-gradient(circle at 100%, rgba(82,84,164,1) 10%, rgba(247,160,130,1) 40%, rgba(178,166,215,1) 55%)",
        slice: "url(/assets/slice3.svg)",
        phonedark: "linear-gradient(70deg, rgb(38,42,80) 10%, rgb(46,53,123) 80%)",
        rainbow:
          "linear-gradient(to bottom right, red 0%, orange 20%, yellow 30%, green 50%, blue 70%, indigo 80%, violet 100%)",
        cannedgradient: "linear-gradient(70deg, #4F63F6 10%, #2740F5 30%, #7FEFC6 50%, #5ECBF7 70%, #ED8097 90%)",
        gradientDark: "radial-gradient(ellipse at 50%, #003153 10%, #6272a4 40%, #444 70%)",
        nauticalGradient: "linear-gradient(70deg, #457B9D 10%, #1D3557 30%, #A8DADC 50%, #F1FAEE 70%, #457B9D 90%)",
      },
      colors: {
        primary: {
          yellow: "#FFD040",
          turquoise: "rgb(105,255,255)",
          mint: "rgb(155,236,200)",
          dracula: "hsl(231, 15%, 18%)",
          charcoal: "rgb(41,39,42)",
          peach: "#f7a082",
          prussian: "#003153 ",
        },
        dracula: {
          bg: "#282a36",
          purple: "#bd93f9",
          sub: "#6272a4",
          subalt: "#20222c",
          text: "#f8f8f2",
          error: "#ff5555",
          yellow: "#f1fa8c",
          green: "#50fa7b",
          orange: "#ffb86c",
          pink: "#ec75c4",
          blue: "#8be9fd",
        },
        nautical: {
          bg: "#F1FAEE",
          blueLight: "#A8DADC",
          blueDark: "#457B9D",
          navy: "#1D3557",
          accent: "#E63946",
        },
        paper: {
          bg: "#eeeeee",
          main: "#444444",
          sub: "#b2b2b2",
          subalt: "#dddddd",
          text: "#444444",
          error: "#d70000",
        },
      },
    },
  },
  plugins: ["tailwindcss ,autoprefixer"],
};
