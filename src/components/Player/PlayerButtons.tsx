import { useState } from "react";
import SizedButton from "@/components/buttons/SizedButton";

const PlayerButtons: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-row gap-2">
      <SizedButton buttonType="shuffle" buttonSize="md" iconSize="lg" onClick={() => {}} />
      <SizedButton buttonType="skipBack" buttonSize="md" iconSize="lg" onClick={() => {}} />
      {isPlaying ? (
        <SizedButton
          buttonType="pause"
          buttonSize="md"
          iconSize="lg"
          onClick={() => setIsPlaying(false)}
          className="bg-white"
        />
      ) : (
        <SizedButton
          buttonType="play"
          buttonSize="md"
          iconSize="xl"
          onClick={() => setIsPlaying(true)}
          className="bg-white"
          iconClassName="ml-[2px]"
        />
      )}
      <SizedButton buttonType="skipForward" buttonSize="md" iconSize="lg" onClick={() => {}} />
      <SizedButton buttonType="repeat" buttonSize="md" iconSize="lg" onClick={() => {}} />
    </div>
  );
};

export default PlayerButtons;
