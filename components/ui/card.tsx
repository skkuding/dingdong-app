import { cn } from "@/lib/utils"; // cn 함수 경로에 맞춰 수정하세요
import { View } from "react-native";

interface CardProps {
  hasShadow?: boolean;
  children: React.ReactNode;
  className?: string;
}

function Card({ children, hasShadow = false, className = "" }: CardProps) {
  return (
    <View
      className={cn(
        // 기본 스타일 (필요하다면 추가)
        "rounded-xl p-4",
        // 조건부 스타일
        hasShadow ? "shadow-drop-1 bg-common-100" : "bg-primary-deep",
        // 외부에서 주입받은 className (최종적으로 병합 및 충돌 해결)
        className,
      )}
    >
      {children}
    </View>
  );
}

export default Card;
