import PlayButton from "../buttons/PlayButtont";

interface MainPlaylistItemProps {
  cover: string;
  title: string;
}
const MainPlaylistItem: React.FC<MainPlaylistItemProps> = ({ cover, title }) => {
  return (
    <div className="bg-black-200 hover:bg-black-100 flex flex-row items-center rounded-lg">
      <div className="w-1/6">
        <img className="rounded-l-md" src={cover} alt="playlist cover" />
      </div>
      <div className="w-5/6">
        <p className="font-bold text-white">{title}</p>
      </div>
      <PlayButton size="sm" onClick={() => {}} />
    </div>
  );
};

export default MainPlaylistItem;
