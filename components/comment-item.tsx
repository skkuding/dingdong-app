// components/comment-item.tsx
import EnterIcon from "@/assets/icons/enter.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { View } from "react-native";

type CommentProps = {
  id: string;
  author: string;
  role: string;
  uri: string;
  content: string;
  date: string;
  replies?: CommentProps[];
  isReply?: boolean;
};

const CommentItem = ({
  author,
  content,
  role,
  date,
  replies,
  uri,
  isReply,
}: CommentProps) => {
  return (
    <View className="flex-row pt-6 gap-2">
      {isReply && (
        <EnterIcon height={24} width={24} className="text-neutral-80" />
      )}
      <View className="flex flex-col">
        {/* 1. 작성자 정보 영역 (Accordion 외부) */}
        <View
          className={cn(
            "flex-row items-center gap-3 mb-3",
            isReply ? "px-2" : "px-4",
          )}
        >
          <Avatar alt={author}>
            <AvatarImage source={{ uri: uri }} />
          </Avatar>
          <View>
            <Text className="text-sub2-sb-16 text-neutral-20">
              {author} · {role}
            </Text>
            <Text className="text-caption4-r-12 text-neutral-60">{date}</Text>
          </View>
        </View>

        {/* 2. 본문 내용 */}
        <Text
          className={cn(
            "text-body4-r-14 text-neutral-30 mb-2",
            isReply ? "px-2" : "px-4",
          )}
        >
          {content}
        </Text>

        {/* 3. 답글 영역 (Accordion 활용) */}
        {replies && replies.length > 0 ? (
          <Accordion type="single" collapsible>
            <AccordionItem value="replies">
              <AccordionTrigger className="caption1-m-13 text-neutral-50 gap-1 px-4">
                <Text> 답글 {replies.length}개</Text>
              </AccordionTrigger>
              <View className="h-5" />
              <AccordionContent>
                <View className="bg-neutral-99 pl-4">
                  {replies.map((reply) => (
                    <CommentItem key={reply.id} {...reply} isReply />
                  ))}
                </View>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <View className="h-5" />
        )}
      </View>
    </View>
  );
};

export { CommentItem };
