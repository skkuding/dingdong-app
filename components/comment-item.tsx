// components/comment-item.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

type CommentProps = {
  id: string;
  author: string;
  content: string;
  date: string;
  replies?: CommentProps[];
};

const CommentItem = ({ author, content, date, replies }: CommentProps) => {
  return (
    <View className="flex flex-col gap-2 p-4 border-b">
      {/* 1. 작성자 정보 영역 (Accordion 외부) */}
      <View className="flex items-center gap-3">
        <Avatar alt={author} />
        <View>
          <Text className="text-body2-m-14">{author}</Text>
          <Text className="text-muted text-xs">{date}</Text>
        </View>
      </View>

      {/* 2. 본문 내용 */}
      <Text className="text-body3-r-16">{content}</Text>

      {/* 3. 답글 영역 (Accordion 활용) */}
      {replies && replies.length > 0 && (
        <Accordion type="single" collapsible>
          <AccordionItem value="replies" className="border-none">
            <AccordionTrigger className="py-2 text-sm text-blue-600">
              <Text> 답글 {replies.length}개</Text>
            </AccordionTrigger>
            <AccordionContent>
              <View className="pl-6 border-l-2 ml-2">
                {replies.map((reply) => (
                  <CommentItem key={reply.id} {...reply} /> // 재귀적 호출
                ))}
              </View>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </View>
  );
};

export { CommentItem };
