import InfoIcon from "@/assets/icons/info.svg";
import colors from "@/styles/colors";
import { Text, View } from "react-native";
import Toast, { ToastConfig } from "react-native-toast-message";

const toastConfig: ToastConfig = {
  success: ({ text1 }) => (
    <View
      style={{
        width: "auto",
        backgroundColor: colors.primary.extralight,
        borderRadius: 1000,
        paddingHorizontal: 8,
        paddingVertical: 6,
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
      }}
    >
      <InfoIcon height={20} width={20} fill={colors.primary.normal} />
      <Text className="text-primary-normal">{text1}</Text>
    </View>
  ),
};

const showToast = (text: string) => {
  Toast.show({
    type: "success",
    text1: text,
    position: "bottom",
    bottomOffset: 60,
  });
};

export { showToast, toastConfig };
