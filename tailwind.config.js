/** @type {import('tailwindcss').Config} */
const colors = require("./colors");
const typography = require("./typography");

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
  ])
);

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: { colors, fontSize },
  },
  plugins: [],
};
