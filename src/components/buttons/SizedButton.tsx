import { twMerge } from "tailwind-merge";
import { getButtonSize } from "../../utils/utils";
import { getIcon } from "./iconsDefinitions";

interface SizedButtonProps {
  buttonSize?: "sm" | "md" | "lg";
  iconSize?: "sm" | "md" | "lg";
  buttonType: "play" | "like";
  className?: string;
  iconClassName?: string;
  onClick: () => void;
}
const SizedButton: React.FC<SizedButtonProps> = ({
  buttonSize = "sm",
  iconSize = "sm",
  className,
  iconClassName,
  onClick,
}) => {
  const sizeButton = getButtonSize("hw", buttonSize);
  const mergedClassNames = twMerge(className, sizeButton);
  const iconElement = getIcon({ iconSize, iconType: "play", className: iconClassName, onClick });

  return (
    <button className={mergedClassNames} onClick={onClick}>
      {iconElement}
    </button>
  );
};

export default SizedButton;
