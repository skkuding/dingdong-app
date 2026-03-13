/** @type {import('tailwindcss').Config} */
const colors = require("./styles/colors");
const typography = require("./styles/typography");
const boxShadow = require("./styles/boxShadow");

// fontSize를 추출해서 Tailwind 형식으로 변환
const fontSize = Object.fromEntries(
  Object.entries(typography).map(([key, value]) => [
    key,
    [
      `${value.fontSize}px`,
      {
        lineHeight: `${value.lineHeight}px`,
        letterSpacing: `${value.letterSpacing}px`,
        fontWeight: value.fontWeight,
      },
    ],
  ]),
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontSize,
      boxShadow,
    },
  },
  plugins: [require("tailwindcss-animate")],
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    backgroundOpacity: true,
  },
};
