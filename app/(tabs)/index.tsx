// app/comments-screen.tsx

import { Button, ScrollView } from "react-native";
import { showToast } from "../../lib/toastConfig";

export default function CommentsScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <Button
        title="Show toast"
        onPress={() =>
          showToast("팀 또는 스쿼드 생성은 단체 리드의 권한이에요")
        }
      />
    </ScrollView>
  );
}
