import BellIcon from "@/assets/icons/bell.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import colors from "@/styles/colors";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: insets.top }}
      className="sticky w-full  z-10 px-4 pb-3 flex justify-end bg-common-100"
    >
      <View className="flex-row justify-between pt-6">
        <Text className="text-2xl font-bold  text-common-0">DINGDONG</Text>
        <View className="flex-row gap-3">
          <BellIcon width={24} height={24} color={colors.common[0]} />
          <MenuIcon width={24} height={24} color={colors.common[0]} />
        </View>
      </View>
    </View>
  );
};

export default Header;
