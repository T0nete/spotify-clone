import SizedButton from "@/components/buttons/SizedButton";
import { buttonsDefinitions } from "@/components/buttons/iconsDefinitions";

const PlaylistCommandButtons: React.FC = () => {
  return (
    <div className="flex flex-row gap-5 p-5">
      <SizedButton buttonType="play" buttonSize="lg" iconSize="lg" onClick={() => {}} iconClassName="ml-1" />
      <SizedButton
        buttonType="heart"
        buttonSize="xl"
        iconSize="xl"
        onClick={() => {}}
        className={buttonsDefinitions.heart.buttonClassName}
        iconClassName="hover:white hover:text-white"
      />
    </div>
  );
};

export default PlaylistCommandButtons;
