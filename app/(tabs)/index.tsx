import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import * as React from "react";
import { useState } from "react";
import { View } from "react-native";

export default function Tab() {
  const [value, setValue] = useState("feedback");
  return (
    <View className="flex w-full flex-col gap-6 px-4">
      <Tabs value={value} onValueChange={setValue} variant="default">
        <TabsList>
          <TabsTrigger value="feedback">
            <Text>Feedback</Text>
          </TabsTrigger>
          <TabsTrigger value="survey">
            <Text>Survey</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="feedback">
          <View>
            <Text>sss</Text>
          </View>
        </TabsContent>

        <TabsContent value="survey">
          <View>
            <Text>ddd</Text>
          </View>
        </TabsContent>
      </Tabs>
    </View>
  );
}
