import Community1 from "@/assets/icons/gnb/chat-1.svg";
import Community2 from "@/assets/icons/gnb/chat-2.svg";
import Schedule2 from "@/assets/icons/gnb/date-fill.svg";
import Schedule1 from "@/assets/icons/gnb/date.svg";
import Home1 from "@/assets/icons/gnb/home-1.svg";
import Home2 from "@/assets/icons/gnb/home-2.svg";
import Help1 from "@/assets/icons/gnb/networking-1.svg";
import Help2 from "@/assets/icons/gnb/networking-2.svg";
import MyPage1 from "@/assets/icons/gnb/person-1.svg";
import MyPage2 from "@/assets/icons/gnb/person-2.svg";
import colors from "@/colors";
import Header from "@/components/Header";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type IconComponent = React.ComponentType<{
  width: number | string;
  height: number | string;
  color: string;
  fill: string;
}>;

const TAB_CONFIG: Record<
  string,
  { label: string; outline: IconComponent; filled: IconComponent }
> = {
  index: { label: "홈", outline: Home1, filled: Home2 },
  help: { label: "도와줘", outline: Help1, filled: Help2 },
  schedule: { label: "일정", outline: Schedule1, filled: Schedule2 },
  community: { label: "모임", outline: Community1, filled: Community2 },
  mypage: { label: "마이", outline: MyPage1, filled: MyPage2 },
};

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View className="flex-row justify-around rounded-full bg-white/80 py-3 px-2 mx-4 absolute bottom-0 left-0 right-0">
      {state.routes.map((route, index) => {
        const config = TAB_CONFIG[route.name];
        const label = config.label;
        const isFocused = state.index === index;
        const Icon = isFocused ? config.filled : config.outline;

        const onPressIn = () => {
          if (Platform.OS === "ios") {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPressIn={onPressIn}
            onPress={onPress}
            className="flex-col items-center"
          >
            <Icon
              width={24}
              height={24}
              fill={isFocused ? colors.primary.normal : "none"}
              color={isFocused ? colors.primary.normal : colors.neutral[50]}
            />
            <Text
              className={`text-body2-m-14 ${isFocused ? "text-primary-normal" : "text-neutral-50"}`}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function Layout() {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="help" />
        <Tabs.Screen name="schedule" />
        <Tabs.Screen name="community" />
        <Tabs.Screen name="mypage" />
      </Tabs>
    </SafeAreaView>
  );
}
