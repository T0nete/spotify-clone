import { Link } from "react-router-dom";
import SizedButton from "@/components/buttons/SizedButton";
import { PlaylistData } from "@/hooks/usePlaylistSongs";

interface MainPlaylistItemProps {
  playList: PlaylistData;
}
const MainPlaylistItem: React.FC<MainPlaylistItemProps> = ({ playList }) => {
  return (
    <Link
      key={playList.id}
      to={`/playlist/${playList.id}`}
      className="group flex flex-row items-center rounded-lg bg-black-200 hover:cursor-pointer hover:bg-black-100"
    >
      <div className="w-1/6">
        <img loading="lazy" className="rounded-l-md" src={playList.cover} alt="playlist cover" />
      </div>
      <div className="flex w-5/6 flex-row items-center justify-between px-2">
        <p className="font-bold text-white">{playList.title}</p>
        <SizedButton
          buttonType="play"
          buttonSize="md"
          iconSize="xl"
          onClick={() => {}}
          className="invisible group-hover:visible"
          iconClassName="pl-1"
        />
      </div>
    </Link>
  );
};

export default MainPlaylistItem;