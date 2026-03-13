// app/index.tsx (HomeScreen)

import ArrowRight from "@/assets/icons/arrow-1/right.svg";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import EmptyView from "@/components/ui/empty-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import colors from "@/styles/colors";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const [value, setValue] = useState("group");
  return (
    <ScrollView className="flex-1 bg-common-100">
      <View className="py-3 px-4 flex-col gap-4 bg-red-100">
        <View className="p-4 flex-row justify-between items-center shadow-drop-1 bg-common-100 rounded-lg">
          <View className="flex-col gap-1.5">
            <Text className="text-title1-sb-20 text-common-0">
              나의 새로운 테스크가{"\n"}생성되었어요!
            </Text>
            <View className="flex-row gap-1.5">
              <Text className="text-caption2-m-12 text-neutral-30">
                도움이 됐어요 7회
              </Text>
              <Text className="text-caption2-m-12 text-neutral-30">
                댓글 2개
              </Text>
            </View>
          </View>
          <Button size="sm" className="flex-row pl-3 pr-2">
            <Text className="text-common-100">바로가기</Text>
            <ArrowRight height={16} width={16} color={colors.common[100]} />
          </Button>
        </View>
        <Button
          className="py-[10px] px-4 rounded-full flex-row justify-between"
          variant="outline"
        >
          <Text className="text-common-0 text-body1-m-16">나의 테스크</Text>
          <View className="flex-row items-center ">
            <Text className="text-primary-normal text-body1-m-16">총 0개</Text>
            <ArrowRight height={20} width={20} color={colors.primary.normal} />
          </View>
        </Button>
      </View>
      <View className="px-4 py-8 flex-col bg-blue-100 gap-2">
        <View className="flex-row justify-between items-center">
          <Text className="text-title1-sb-20 text-common-0">다가오는 일정</Text>
          <View className="flex-row items-center ">
            <Text className="text-neutral-50 text-body2-m-14">더보기</Text>
            <ArrowRight height={16} width={16} color={colors.neutral[50]} />
          </View>
        </View>
        <Tabs value={value} onValueChange={setValue} variant="underline">
          <TabsList>
            <TabsTrigger value="group">
              <Text>모임</Text>
            </TabsTrigger>
            <TabsTrigger value="task">
              <Text>테스크</Text>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="group">
            <EmptyView>
              <Text>다가오는 일정이 없어요</Text>
            </EmptyView>
          </TabsContent>

          <TabsContent value="task">
            <View className="flex-col gap-1.5 mt-3">
              <Card className="p-4 flex-row gap-3 items-center">
                <View className="flex-col px-[5px]">
                  <Text className="text-neutral-90 text-caption2-m-12">
                    Mon
                  </Text>
                  <Text className="text-head2-m-24 text-common-100">01</Text>
                </View>
                <View className="flex-col">
                  <Text className="text-primary-light text-caption1-m-13">
                    스터디
                  </Text>
                  <Text className="text-body1-m-16 text-common-100 mb-1">
                    [프로토파이 스터디] 제2회 스터디 모임
                  </Text>
                  <Text className="text-neutral-80 text-caption3-r-13">
                    2025. 01. 01 · 00:00 · 사당역
                  </Text>
                </View>
              </Card>
              <Card className="p-4 flex-row gap-3 items-center" hasShadow>
                <View className="flex-col px-[5px]">
                  <Text className="text-neutral-30 text-caption2-m-12">
                    Mon
                  </Text>
                  <Text className="text-head2-m-24 text-primary-normal">
                    01
                  </Text>
                </View>
                <View className="flex-col">
                  <Text className="text-primary-normal text-caption1-m-13">
                    스터디
                  </Text>
                  <Text className="text-body1-m-16 text-common-0 mb-1">
                    [프로토파이 스터디] 제2회 스터디 모임
                  </Text>
                  <Text className="text-neutral-60 text-caption3-r-13">
                    2025. 01. 01 · 00:00 · 사당역
                  </Text>
                </View>
              </Card>
              <Card className="p-4 flex-row gap-3 items-center" hasShadow>
                <View className="flex-col px-[5px]">
                  <Text className="text-neutral-30 text-caption2-m-12">
                    Mon
                  </Text>
                  <Text className="text-head2-m-24 text-primary-normal">
                    01
                  </Text>
                </View>
                <View className="flex-col">
                  <Text className="text-primary-normal text-caption1-m-13">
                    스터디
                  </Text>
                  <Text className="text-body1-m-16 text-common-0 mb-1">
                    [프로토파이 스터디] 제2회 스터디 모임
                  </Text>
                  <Text className="text-neutral-60 text-caption3-r-13">
                    2025. 01. 01 · 00:00 · 사당역
                  </Text>
                </View>
              </Card>
            </View>
          </TabsContent>
        </Tabs>
      </View>
    </ScrollView>
  );
}
