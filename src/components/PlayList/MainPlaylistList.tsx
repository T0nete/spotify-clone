import { playlist } from "../../constants/playlist";
import MainPlaylistItem from "./MainPlaylistItem";

const MainPlaylistList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-3 py-3 md:grid-cols-2 lg:grid-cols-3">
      {playlist.map((item) => (
        <MainPlaylistItem key={item.id} playList={item} />
      ))}
    </div>
  );
};

export default MainPlaylistList;
