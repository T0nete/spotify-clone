import { twMerge } from "tailwind-merge";
import { getButtonSize } from "../../utils/utils";
import { buttonsDefinitions, getIcon } from "./iconsDefinitions";

interface SizedButtonProps {
  buttonType: keyof typeof buttonsDefinitions;
  buttonSize?: "sm" | "md" | "lg";
  iconSize?: "sm" | "md" | "lg";
  className?: string;
  iconClassName?: string;
  onClick: () => void;
}
const SizedButton: React.FC<SizedButtonProps> = ({
  buttonType,
  buttonSize = "sm",
  iconSize = "sm",
  className,
  iconClassName,
  onClick,
}) => {
  const sizeButton = getButtonSize("hw", buttonSize);
  const mergedClassNames = twMerge(className, sizeButton);
  const iconElement = getIcon({ iconSize, iconType: buttonType, className: iconClassName, onClick });

  return (
    <button className={mergedClassNames} onClick={onClick}>
      {iconElement}
    </button>
  );
};

export default SizedButton;
