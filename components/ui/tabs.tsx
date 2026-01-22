import { TextClassContext } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@rn-primitives/tabs";
import { createContext, useContext } from "react";
import { Platform } from "react-native";

type TabsVariant = "underline" | "pill";

const TabsVariantContext = createContext<TabsVariant>("underline");

// 1. 배경/테두리 스타일
const tabsTriggerBaseVariants = {
  underline: "px-7 py-2",
  pill: "px-4 py-1.5 rounded-full",
};

const tabsTriggerSelectedVariants = {
  underline: "border-b-2 border-primary-normal",
  pill: "bg-primary-deep",
};

// 2. 텍스트 색상 스타일 (이 부분이 질문하신 내용입니다)
const tabsTextBaseVariants = {
  underline: "text-neutral-50",
  pill: "text-neutral-40", // 기본 색상이 같다면 문자열로 합쳐도 됩니다.
};

const tabsTextSelectedVariants = {
  underline: "text-common-0",
  pill: "text-common-100",
};

type TabsProps = TabsPrimitive.RootProps &
  React.RefAttributes<TabsPrimitive.RootRef> & {
    variant: TabsVariant;
  };

function Tabs({ className, variant, ...props }: TabsProps) {
  return (
    <TabsVariantContext.Provider value={variant}>
      <TabsPrimitive.Root
        className={cn("flex flex-col", className)}
        {...props}
      />
    </TabsVariantContext.Provider>
  );
}

function TabsList({
  className,
  ...props
}: TabsPrimitive.ListProps & React.RefAttributes<TabsPrimitive.ListRef>) {
  return (
    <TabsPrimitive.List
      className={cn(
        "flex flex-row items-center justify-center",
        Platform.select({ web: "inline-flex w-fit", native: "mr-auto" }),
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  value: triggerValue,
  ...props
}: TabsPrimitive.TriggerProps & React.RefAttributes<TabsPrimitive.TriggerRef>) {
  const { value: selectedValue } = TabsPrimitive.useRootContext();
  const contextVariant = useContext(TabsVariantContext);
  const isSelected = triggerValue === selectedValue;

  // 미리 정의된 객체에서 상태에 맞는 클래스를 가져옵니다.
  const textClass = isSelected
    ? tabsTextSelectedVariants[contextVariant]
    : tabsTextBaseVariants[contextVariant];

  return (
    <TextClassContext.Provider value={cn("text-body2-m-14", textClass)}>
      <TabsPrimitive.Trigger
        className={cn(
          tabsTriggerBaseVariants[contextVariant],
          isSelected && tabsTriggerSelectedVariants[contextVariant],
          Platform.select({
            web: "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex cursor-default whitespace-nowrap transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
          }),
          props.disabled && "opacity-50",
          className,
        )}
        value={triggerValue}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

function TabsContent({
  className,
  ...props
}: TabsPrimitive.ContentProps & React.RefAttributes<TabsPrimitive.ContentRef>) {
  return (
    <TabsPrimitive.Content
      className={cn(Platform.select({ web: "flex-1 outline-none" }), className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
