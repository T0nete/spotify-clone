import { IoPlaySharp } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

export const buttonsDefinitions = {
  play: {
    icon: IoPlaySharp,
    buttonClassName: "flex items-center justify-center rounded-full bg-[#1fdf64] p-2 hover:scale-105",
  },
  heart: {
    icon: LuHeart,
    buttonClassName: "flex items-center justify-center rounded-full bg-[#1fdf64] p-2 hover:scale-105",
  },
};

interface IconsProps {
  iconSize?: "sm" | "md" | "lg";
  color?: string;
  iconType: keyof typeof buttonsDefinitions;
  className?: string;
  onClick: () => void;
}

export const getIcon = (props: IconsProps): JSX.Element => {
  const { iconSize = "sm", color, iconType, className } = props;
  const sizeIcon = iconSize === "sm" ? 8 : iconSize === "md" ? 16 : 24;

  const IconComponent = buttonsDefinitions[iconType].icon;

  if (!IconComponent) {
    throw new Error(`Button type ${iconType} is not defined`);
  }

  return <IconComponent size={sizeIcon} color={color ?? "black"} className={className} />;
};
