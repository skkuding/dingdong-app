import BellIcon from "@/assets/icons/bell.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View className="h-20 px-4 py-3 flex justify-end">
      <View className="flex-row justify-between">
        <Text className="text-2xl font-bold">DINGDONG</Text>
        <View className="flex-row gap-3">
          <MenuIcon width={24} height={24} />
          <BellIcon width={24} height={24} />
        </View>
      </View>
    </View>
  );
};

export default Header;
