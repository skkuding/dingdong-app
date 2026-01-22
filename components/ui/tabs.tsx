import { TextClassContext } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@rn-primitives/tabs";
import { cva, VariantProps } from "class-variance-authority";
import { Platform } from "react-native";

const tabsTriggerVariants = cva(
  "flex items-center justify-center whitespace-nowrap px-7 py-2 transition-all disabled:opacity-50",
  {
    variants: {
      variant: {
        // 왼쪽: 밑줄 스타일
        underline:
          "h-[calc(100%-1px)] border-b-2 border-transparent data-[state=active]:border-primary-normal",
        // 오른쪽: 캡슐 스타일
        pill: "rounded-full bg-muted text-muted-foreground data-[state=active]:bg-foreground data-[state=active]:text-background px-4 py-1.5",
      },
    },
    defaultVariants: {
      variant: "underline",
    },
  },
);

function Tabs({
  className,
  ...props
}: TabsPrimitive.RootProps & React.RefAttributes<TabsPrimitive.RootRef>) {
  return (
    <TabsPrimitive.Root className={cn("flex flex-col", className)} {...props} />
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

interface TabsTriggerProps
  extends
    TabsPrimitive.TriggerProps,
    VariantProps<typeof tabsTriggerVariants> {}

function TabsTrigger({
  className,
  ...props
}: TabsPrimitive.TriggerProps & React.RefAttributes<TabsPrimitive.TriggerRef>) {
  const { value } = TabsPrimitive.useRootContext();
  return (
    <TextClassContext.Provider
      value={cn(
        "text-sm font-medium",
        variant === "underline" &&
          (isActive ? "text-foreground" : "text-muted-foreground"),
        variant === "pill" &&
          (isActive ? "dark:text-background" : "dark:text-muted-foreground"),
      )}
    >
      <TabsPrimitive.Trigger
        className={cn(
          "flex h-[calc(100%-1px)] flex-row items-center justify-center gap-1.5 px-7 py-2",
          Platform.select({
            web: "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex cursor-default whitespace-nowrap transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
          }),
          props.disabled && "opacity-50",
          props.value === value && "border-b-2 border-primary-normal",
          className,
        )}
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
