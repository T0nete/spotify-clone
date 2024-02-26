import { Link } from "react-router-dom";
import PlayButton from "../buttons/PlayButtont";
import { PlayList } from "../../constants/playlist";

interface MainPlaylistItemProps {
  playList: PlayList;
}
const MainPlaylistItem: React.FC<MainPlaylistItemProps> = ({ playList }) => {
  return (
    <Link
      to={`/playlist/${playList.id}`}
      className="flex flex-row items-center rounded-lg bg-black-200  hover:cursor-pointer hover:bg-black-100"
    >
      <div className="w-1/6">
        <img className="rounded-l-md" src={playList.cover} alt="playlist cover" />
      </div>
      <div className="flex w-5/6 flex-row items-center justify-between px-2">
        <p className="font-bold text-white">{playList.title}</p>
        <PlayButton buttonSize="md" iconSize="lg" onClick={() => {}} />
      </div>
    </Link>
  );
};

export default MainPlaylistItem;
