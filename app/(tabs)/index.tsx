// app/comments-screen.tsx
import { CommentItem } from "@/components/comment-item";
import { ScrollView, View } from "react-native";

const DUMMY_COMMENTS = [
  {
    id: "1",
    author: "링딩동",
    uri: "https://github.com/mrzachnugent.png",
    role: "디자이너",
    date: "2025. 01. 01",
    content:
      "말씀 주신 내용 이해했습니다! Problem 불러오기 모달이 좀 더 보편적으로 사용하기 편리하기에 Contest 불러오기 모달을 Problem 불러오기 모달로 통일할게요",
    replies: [
      {
        id: "1-1",
        author: "김딩동",
        uri: "https://github.com/mrzachnugent.png",
        role: "개발자",
        date: "2025. 01. 01",
        content: "네, 확인했습니다! 모달 구조 변경 후 다시 공유드릴게요.",
      },
      {
        id: "1-2",
        author: "김딩동",
        uri: "https://github.com/mrzachnugent.png",
        role: "개발자",
        date: "2025. 01. 01",
        content: "추가로 모달의 애니메이션 속도도 조절이 필요할까요?",
      },
    ],
  },
  {
    id: "2",
    author: "박딩동",
    uri: "https://github.com/mrzachnugent.png",
    role: "기획자",
    date: "2025. 01. 02",
    content: "전체적인 흐름이 아주 매끄럽네요. 수고하셨습니다!",
  },
];

export default function CommentsScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="bg-red-100">
        {DUMMY_COMMENTS.map((comment, index) => (
          <View key={comment.id}>
            <CommentItem {...comment} />
            {/* 마지막 요소가 아닐 때만 구분선 출력 */}
            {index < DUMMY_COMMENTS.length - 1 && (
              <View className="border-b border-neutral-95" />
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
