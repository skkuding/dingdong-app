/** @type {import('tailwindcss').Config} */
const colors = require("./styles/colors");
const typography = require("./styles/typography");
const { hairlineWidth } = require("nativewind/theme");

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
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    backgroundOpacity: true,
  },
};
