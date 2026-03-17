import ArrowRight from "@/assets/icons/arrow-1/right.svg";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import EmptyView from "@/components/ui/empty-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import colors from "@/styles/colors";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const IMAGE_SIZE = 64;
const SCREEN_WIDTH = Dimensions.get("window").width;
// 양옆 패딩(32)을 뺀 영역의 72% 너비 + 카드 간격 8px
const ITEM_WIDTH = (SCREEN_WIDTH - 32) * 0.72;
const GAP = 8;
const SNAP_INTERVAL = ITEM_WIDTH + GAP; // 한 번 스와이프할 때 넘어갈 거리

export default function HomeScreen() {
  const [value, setValue] = useState("group");
  const [currentIndex, setCurrentIndex] = useState(0); // 인디케이터용 상태

  // 스크롤 시 현재 인덱스 계산
  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SNAP_INTERVAL);
    setCurrentIndex(index);
  };

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
      <View className="px-4 py-7 flex-col bg-yellow-100 gap-3">
        <View className="flex-row justify-between items-center">
          <View className="flex-col gap-1.5">
            <Text className="text-title1-sb-20 text-common-0">솔루션 공유</Text>
            <Text className="text-caption3-r-13 text-neutral-40">
              내가 알아야 할 중요한 솔루션 공유
            </Text>
          </View>
          <View className="flex-row items-center ">
            <Text className="text-neutral-50 text-body2-m-14">더보기</Text>
            <ArrowRight height={16} width={16} color={colors.neutral[50]} />
          </View>
        </View>
        <FlatList
          data={defaultDataWith6Colors}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={SNAP_INTERVAL} // 카드가 딱딱 걸리게 하는 핵심!
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: 16 }} // 양옆 스크롤 여백
          onScroll={handleScroll}
          scrollEventThrottle={16}
          renderItem={({ index }) => (
            <View
              style={{
                width: ITEM_WIDTH,
                marginRight:
                  index === defaultDataWith6Colors.length - 1 ? 0 : GAP,
              }}
            >
              <Card className="py-4 px-3 flex-row gap-4 items-center" hasShadow>
                <View className="flex-col flex-1">
                  <Text className="mb-0.5 text-primary-normal text-caption2-m-12">
                    2026-1 백엔드팀
                  </Text>
                  <View className="flex-row justify-between items-center mb-2">
                    <Text className="text-common-0 text-sub3-sb-16">
                      API 인증 오류 해결
                    </Text>
                    <ArrowRight
                      height={20}
                      width={20}
                      color={colors.neutral[50]}
                    />
                  </View>
                  <Text
                    className="text-caption3-r-13 text-neutral-40"
                    numberOfLines={1}
                  >
                    간헐적으로 API 서비스(아마도 ClientAPI)가 500 에러를
                    발생시키는 상황입니다.
                  </Text>
                </View>
                <Image
                  style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 4,
                  }}
                  source={require("@/assets/images/typing.png")}
                />
              </Card>
            </View>
          )}
        />
        <View className="flex-row justify-center gap-[6px] mt-2">
          {defaultDataWith6Colors.map((_, index) => (
            <View
              key={index}
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: currentIndex === index ? "#5558FF" : "#D9D9D9", // 색상은 프로젝트에 맞게 수정하세요
              }}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const defaultDataWith6Colors = [
  "#B0604D",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

const styles = StyleSheet.create({
  pagerView: {
    height: 100,
    // width: "100%",
  },
});
