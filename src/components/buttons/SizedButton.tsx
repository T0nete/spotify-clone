import { twMerge } from "tailwind-merge";
import { TSize, getButtonSize, getIconSize } from "@/utils/utils";
import { buttonsDefinitions } from "./iconsDefinitions";

interface SizedButtonProps {
  buttonType: keyof typeof buttonsDefinitions;
  buttonSize?: TSize;
  iconSize?: TSize;
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
  const button = buttonsDefinitions[buttonType];
  const sizeButton = getButtonSize("hw", buttonSize);
  const mergedClassNames = twMerge(button.buttonClassName, sizeButton, className);

  const IconComponent = buttonsDefinitions[buttonType].icon;
  const sizeIcon = getIconSize(iconSize);

  return (
    <button className={mergedClassNames} onClick={onClick}>
      <IconComponent size={sizeIcon} className={iconClassName} />
    </button>
  );
};

export default SizedButton;
