import HomeComponent from "@/components/svgs/HomeComponent";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

type IconComponent = React.ComponentType<{
  size?: number;
  color?: string;
  fill?: string;
  strokeWidth?: number;
}>;

const TAB_CONFIG: Record<string, { label: string; Icon: IconComponent }> = {
  index: { label: "홈", Icon: HomeComponent },
  help: { label: "도와줘", Icon: HomeComponent },
  schedule: { label: "일정", Icon: HomeComponent },
  community: { label: "모임", Icon: HomeComponent },
  mypage: { label: "마이", Icon: HomeComponent },
};

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabList}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const config = TAB_CONFIG[route.name];
        const label = config?.label ?? options.title ?? route.name;
        const Icon = config?.Icon ?? HomeComponent;

        const isFocused = state.index === index;

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
            style={[styles.defaultTab, isFocused && styles.activeTab]}
          >
            <Icon
              size={24}
              color={isFocused ? "#FFFFFF" : "#888888"}
              fill={isFocused ? "#6366F1" : "none"}
            />
            <Text style={[styles.defaultText, isFocused && styles.activeText]}>
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
  );
}

const styles = StyleSheet.create({
  tabList: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 50,
    backgroundColor: "#E5E5E5",
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginBottom: 30,
    marginHorizontal: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  defaultTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 4,
    padding: 10,
    borderRadius: 15,
  },
  activeTab: {
    backgroundColor: "#6366F1",
  },
  defaultText: {
    fontSize: 12,
    color: "#888888",
  },
  activeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
