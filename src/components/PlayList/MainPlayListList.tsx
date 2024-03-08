import { PlaylistData } from "@/hooks/usePlaylistSongs";
import MainPlaylistItem from "./MainPlayListItem";

interface IMainPlaylistList {
  playLists: PlaylistData[] | undefined;
}
const MainPlaylistList: React.FC<IMainPlaylistList> = ({ playLists }) => {
  return (
    <div className="grid grid-cols-1 gap-3 py-3 md:grid-cols-2 lg:grid-cols-3">
      {playLists?.map((item) => <MainPlaylistItem key={item.id} playList={item} />)}
    </div>
  );
};

export default MainPlaylistList;
