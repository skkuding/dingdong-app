import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Tab() {
  return (
    <View className="flex-1 bg-blue-200">
      <Button variant="default" size="default" className="m-4">
        <Text>Click me</Text>
      </Button>
    </View>
  );
}
