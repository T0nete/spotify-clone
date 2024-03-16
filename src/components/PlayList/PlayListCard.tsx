import { PlaylistData } from "@/hooks/usePlaylistSongs";
import SizedButton from "../buttons/SizedButton";

interface PlayListCardProps {
  playList: PlaylistData;
}
const PlayListCard: React.FC<PlayListCardProps> = ({ playList }) => {
  return (
    <div className="group m-2 w-48 flex-shrink-0 rounded-md bg-black-200 p-3 hover:bg-black-100">
      <div className="relative">
        <img src={playList.cover} alt={`Image of ${playList.title}`} className="my-1 h-44 w-44 rounded-sm" />
        <SizedButton
          buttonType="play"
          buttonSize="md"
          iconSize="xl"
          onClick={() => {}}
          className="animation-fadeInUp absolute bottom-1 right-1 hidden group-hover:block"
          iconClassName="pl-1"
        />
      </div>
      <p className="my-1 text-white">{playList.title}</p>
    </div>
  );
};

export default PlayListCard;
