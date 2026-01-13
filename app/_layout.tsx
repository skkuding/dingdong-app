import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon src={require("@/assets/icons/gnb/home-1.png")} />
        <Label>홈</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="help">
        <Icon src={require("@/assets/icons/gnb/networking-1.png")} />
        <Label>도와줘</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="schedule">
        <Icon src={require("@/assets/icons/gnb/date-1.png")} />
        <Label>일정</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="community">
        <Icon src={require("@/assets/icons/gnb/chat-1.png")} />
        <Label>모임</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="mypage">
        <Icon src={require("@/assets/icons/gnb/person-1.png")} />
        <Label>마이</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
