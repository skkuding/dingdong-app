const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// 1. 기본 설정 가져오기
const config = getDefaultConfig(__dirname);
const { transformer, resolver } = config;

// 2. SVG 트랜스포머 설정 입히기
config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
};
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};

// 3. 마지막으로 NativeWind 설정으로 감싸서 한 번만 export 하기!
module.exports = withNativeWind(config, {
  input: "./global.css",
  inlineRem: 16,
});
