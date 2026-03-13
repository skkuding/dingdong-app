import InfoIcon from "@/assets/icons/info.svg";
import colors from "@/styles/colors";
import { View } from "react-native";
function EmptyView({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-col items-center justify-center py-7">
      <InfoIcon height={24} width={24} color={colors.neutral[50]} />
      {children}
    </View>
  );
}

export default EmptyView;
