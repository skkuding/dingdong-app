// app/index.tsx (HomeScreen)
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

import ArrowRight from "@/assets/icons/arrow-1/right.svg";
import Help1 from "@/assets/images/banner/help1.png";
import Help2 from "@/assets/images/banner/help2.png";
import Help3 from "@/assets/images/banner/help3.png";
import colors from "@/styles/colors";
import { LinearGradient } from "expo-linear-gradient";

// 배너 데이터 구성
const BANNER_DATA = [
  {
    id: 1,
    image: Help1,
    title: "문제 해결 과정은\n그리 오래 걸리지 않아요",
    subtitle: "문제를 함께 공유한다면 말이죠",
  },
  {
    id: 2,
    image: Help2,
    title: "문제를 공유하는 것,\n그 자체로도 성장할 수 있어요",
    subtitle: "그러니 문제가 생겼다면 공유해주세요!",
  },
  {
    id: 3,
    image: Help3, // 임시로 같은/다른 이미지 사용
    title: "도움이 필요할 땐\n언제든 딩동을 울려주세요",
    subtitle: "우리가 함께 해결해 나갈게요",
  },
];

export default function HomeScreen() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <ScrollView className="flex-1" bounces={false}>
      <View className="h-[471px] w-full">
        <PagerView
          style={{ flex: 1 }}
          initialPage={0}
          onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        >
          {BANNER_DATA.map((item) => (
            <View key={String(item.id)} style={{ flex: 1 }}>
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />

              <LinearGradient
                colors={["rgba(0, 0, 0, 0.8)", "transparent"]}
                locations={[0, 1]}
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: "40%",
                }}
              />

              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                locations={[0.3007, 1]}
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "60%",
                  justifyContent: "flex-end",
                  paddingHorizontal: 20,
                  paddingBottom: 54,
                  gap: 12,
                }}
              >
                <Text className="text-head1-sb-24 text-common-100">
                  {item.title}
                </Text>
                <View className="flex-row justify-between items-center">
                  <Text className="text-body4-r-14 text-neutral-90">
                    {item.subtitle}
                  </Text>
                  <Pressable className="flex-row items-center">
                    <Text className="caption3-r-13 text-neutral-90">
                      도와줘 바로가기
                    </Text>
                    <ArrowRight
                      height={16}
                      width={16}
                      color={colors.neutral[90]}
                    />
                  </Pressable>
                </View>
              </LinearGradient>
            </View>
          ))}
        </PagerView>

        {/* 하단 페이지네이션 (점 3개) */}
        <View className="absolute bottom-7 flex-row w-full justify-center gap-1.5">
          {BANNER_DATA.map((_, index) => (
            <View
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${
                currentPage === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </View>
      </View>

      {/* 여기에 스크롤될 나머지 홈 화면 내용들을 추가하시면 됩니다 */}
    </ScrollView>
  );
}
