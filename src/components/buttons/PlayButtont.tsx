import SizedButton from "./SizedButton";
import { buttonsDefinitions } from "./iconsDefinitions";

interface PlayButtonProps {
  buttonSize?: "sm" | "md" | "lg";
  iconSize?: "sm" | "md" | "lg";
  buttonType: "play" | "like";
  onClick: () => void;
}
const PlayButton: React.FC<PlayButtonProps> = ({ buttonSize = "sm", iconSize = "sm", onClick }) => {
  return (
    <SizedButton
      buttonSize={buttonSize}
      iconSize={iconSize}
      buttonType="play"
      onClick={onClick}
      className={buttonsDefinitions.play.buttonClassName}
      iconClassName="ml-1"
    />
  );
};

export default PlayButton;
