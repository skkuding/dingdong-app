import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View className="h-20 px-4 py-3 flex justify-end">
      <View className="flex justify-between">
        <Text className="text-2xl font-bold">DINGDONG</Text>
        <View className="flex gap-3"></View>
      </View>
    </View>
  );
};

export default Header;
