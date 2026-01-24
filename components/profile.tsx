import React from "react";
import { Image, Text, View } from "react-native";

const ProfileImage = ({ size, uri }: { size: number; uri: string | null }) => {
  return (
    <Image
      style={{ width: size, height: size, borderRadius: size / 2 }}
      source={uri ? { uri } : require("@/assets/images/profile-default.png")}
    />
  );
};

const ProfileTitle = ({
  leaderType,
  children,
}: {
  leaderType: string;
  children: React.ReactNode;
}) => {
  return (
    <View className="flex-row gap-1 flex-0 items-center">
      <Text className="text-body1-m-16">{children}</Text>
      {leaderType && (
        <Text className="text-caption2-m-12 text-primary-normal rounded-sm bg-primary-extralight px-1.5 py-0.5">
          {leaderType}
        </Text>
      )}
    </View>
  );
};
const ProfileDescription = ({ children }: { children: React.ReactNode }) => {
  return <Text className="text-caption1-m-13 text-neutral-60">{children}</Text>;
};

export { ProfileDescription, ProfileImage, ProfileTitle };
