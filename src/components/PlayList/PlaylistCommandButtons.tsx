import SizedButton from "../buttons/SizedButton";
import { buttonsDefinitions } from "../buttons/iconsDefinitions";

const PlaylistCommandButtons: React.FC = () => {
  return (
    <div className="flex flex-row p-5">
      <SizedButton
        buttonSize="lg"
        iconSize="lg"
        buttonType="play"
        onClick={() => {}}
        className={buttonsDefinitions.play.buttonClassName}
      />
      <SizedButton
        buttonSize="lg"
        iconSize="lg"
        buttonType="heart"
        onClick={() => {}}
        className={buttonsDefinitions.heart.buttonClassName}
      />
    </div>
  );
};

export default PlaylistCommandButtons;
