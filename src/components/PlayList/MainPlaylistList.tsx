import MainPlaylistItem from "./MainPlaylistItem";

const MainPlaylistList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-3 py-3 md:grid-cols-2 lg:grid-cols-3">
      <MainPlaylistItem cover="https://via.placeholder.com/64" title="Top 50: España" />
      <MainPlaylistItem cover="https://via.placeholder.com/64" title="lofi covers" />
      <MainPlaylistItem cover="https://via.placeholder.com/64" title="LA ÚLTIMA" />
      <MainPlaylistItem cover="https://via.placeholder.com/64" title="Top 50: Global" />
      <MainPlaylistItem cover="https://via.placeholder.com/64" title="What Now? with Trevor Noah" />
      <MainPlaylistItem cover="https://via.placeholder.com/64" title="GRX" />
    </div>
  );
};

export default MainPlaylistList;
