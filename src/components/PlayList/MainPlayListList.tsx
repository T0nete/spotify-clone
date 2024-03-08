import MainPlaylistItem from "./MainPlayListItem";
import usePlaylists from "@/hooks/usePlaylists";
import { useEffect } from "react";

const MainPlaylistList: React.FC = () => {
  const { playLists, fetchPlayLists } = usePlaylists();

  useEffect(() => {
    fetchPlayLists();
  }, [fetchPlayLists]);

  return (
    <div className="grid grid-cols-1 gap-3 py-3 md:grid-cols-2 lg:grid-cols-3">
      {playLists?.map((item) => <MainPlaylistItem key={item.id} playList={item} />)}
    </div>
  );
};

export default MainPlaylistList;
