import { cn } from "@/lib/utils";
import React from "react";
import { Text, View, ViewProps } from "react-native";
import { TextClassContext } from "./ui/text";

const PostCard = ({
  className,
  ...props
}: ViewProps & React.RefAttributes<View>) => {
  return (
    <TextClassContext.Provider value="text-card-foreground">
      <View
        className={cn(
          "bg-common-100 flex-col rounded-md shadow-[0px_8px_8px_0px_rgba(45,45,56,0.06)]",
          className,
        )}
        {...props}
      />
    </TextClassContext.Provider>
  );
};

const PostHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text className="text-caption2-m-12 text-primary-normal">{children}</Text>
  );
};

const PostTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      className="text-sub3-sb-16 text-common-0"
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {children}
    </Text>
  );
};

const PostDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      className="text-caption3-r-13 text-neutral-40"
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {children}
    </Text>
  );
};

const PostFooter = ({
  children,
  date,
}: {
  children: React.ReactNode;
  date: Date;
}) => {
  return (
    <View className="flex-row justify-between items-center">
      {children}
      <Text className="text-caption4-r-12 text-neutral-60">
        {date.toLocaleDateString()}
      </Text>
    </View>
  );
};

const PostBadge = ({
  isResolved,
  children,
}: {
  isResolved: boolean;
  children: React.ReactNode;
}) => {
  return (
    <View
      className={cn(
        "rounded-full px-2 py-1 flex-row items-center gap-1.5",
        isResolved ? "bg-neutral-99" : "bg-primary-normal",
      )}
    >
      <View
        className={cn(
          "h-1 w-1 rounded-full",
          isResolved ? "bg-neutral-60" : "bg-common-100",
        )}
      />
      <Text
        className={cn(
          "text-caption2-m-12",
          isResolved ? "text-neutral-60" : "text-common-100",
        )}
      >
        {children}
      </Text>
    </View>
  );
};

export {
  PostBadge,
  PostCard,
  PostDescription,
  PostFooter,
  PostHeader,
  PostTitle,
};
