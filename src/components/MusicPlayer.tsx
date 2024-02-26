import React from "react";
import PlayerButtons from "./Player/PlayerButtons";

const MusicPlayer: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-grow"></div>
      <div className="flex-grow-2">
        <PlayerButtons />
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default MusicPlayer;
