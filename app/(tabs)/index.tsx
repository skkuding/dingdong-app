import {
  PostBadge,
  PostCard,
  PostDescription,
  PostFooter,
  PostHeader,
  PostTitle,
} from "@/components/post";
import {
  ProfileDescription,
  ProfileImage,
  ProfileTitle,
} from "@/components/profile";
import React from "react";
import { ScrollView, View } from "react-native";

export default function CommentsScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <PostCard className="px-4 py-5">
        <PostHeader>SKKUDING | TF 팀</PostHeader>
        <View className="h-[3.5px]" />
        <View className="flex-row justify-between">
          <PostTitle>API 인증 오류 해결</PostTitle>
          <PostBadge isResolved={false}>할당 전</PostBadge>
        </View>
        <View className="h-1.5" />
        <PostDescription>
          간헐적으로 API 서비스(아마도 ClientAPI)가 500 에러를 발생시키는
          상황입니다. 인프라 측에서 따로 문제는 발견하지 못했습니다.
        </PostDescription>
      </PostCard>
      <PostCard className="px-4 py-5">
        <PostHeader>SKKUDING | TF 팀</PostHeader>
        <View className="h-[3.5px]" />
        <View className="flex-row justify-between">
          <PostTitle>API 인증 오류 해결</PostTitle>
          <PostBadge isResolved={true}>완료 됨</PostBadge>
        </View>
        <View className="h-1.5" />
        <PostDescription>
          간헐적으로 API 서비스(아마도 ClientAPI)가 500 에러를 발생시키는
          상황입니다. 인프라 측에서 따로 문제는 발견하지 못했습니다.
        </PostDescription>
        <PostFooter date={new Date(2024, 5, 1)}>
          <View className="flex-row items-center gap-2">
            <ProfileImage size={40} uri={null} />
            <View>
              <ProfileTitle leaderType="스터디장">김민정</ProfileTitle>
              <ProfileDescription>프로필 설명</ProfileDescription>
            </View>
          </View>
        </PostFooter>
      </PostCard>
    </ScrollView>
  );
}
