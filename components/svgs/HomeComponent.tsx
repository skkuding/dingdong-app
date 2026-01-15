import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  size?: number;
  color?: string;
  fill?: string;
  strokeWidth?: number;
}

const HomeComponent = ({
  size = 24,
  color = "#fff",
  fill = "none",
  strokeWidth = 1,
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <Path
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 19.982v-9.714a1.158 1.158 0 0 0-.45-.914l-7.875-6a1.113 1.113 0 0 0-1.35 0l-7.875 6a1.139 1.139 0 0 0-.45.914v9.714c0 .303.119.594.33.808.21.215.497.335.795.335h4.5c.298 0 .585-.12.796-.335.21-.214.329-.505.329-.808v-4.428c0-.303.119-.594.33-.809.21-.214.497-.334.795-.334h2.25c.298 0 .585.12.796.335.21.214.329.505.329.808v4.428c0 .303.118.594.33.808.21.215.497.335.795.335h4.5c.298 0 .584-.12.796-.335.21-.214.329-.505.329-.808Z"
    />
  </Svg>
);

export default HomeComponent;
