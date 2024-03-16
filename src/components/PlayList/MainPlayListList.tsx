import { PlaylistData } from "@/hooks/usePlaylistSongs";
import MainPlaylistItem from "./Item/MainPlayListItem";
import MainPlaylistItemSkeleton from "./Item/MainPlayListItemSkeleton";

interface IMainPlaylistList {
  playLists: PlaylistData[] | undefined;
  isLoading: boolean;
}
const MainPlaylistList: React.FC<IMainPlaylistList> = ({ playLists, isLoading }) => {
  return (
    <div className="grid grid-cols-1 gap-3 py-3 md:grid-cols-2 lg:grid-cols-3">
      {!isLoading
        ? playLists?.map((item) => <MainPlaylistItem key={item.id} playList={item} />)
        : Array.from({ length: 6 }, (_, i) => <MainPlaylistItemSkeleton key={i} />)}
    </div>
  );
};

export default MainPlaylistList;
