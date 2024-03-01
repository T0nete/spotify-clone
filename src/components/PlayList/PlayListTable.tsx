import { LuClock3 } from "react-icons/lu";
import { PlayList } from "../../constants/playlist";
import useBucketData from "../../hooks/useBucketData";
import { useState } from "react";

interface PlayListTableProps {
  playListData: PlayList;
}
const PlayListTable: React.FC<PlayListTableProps> = ({ playListData }) => {
  const { songs, images, error, isLoading } = useBucketData();
  const [currentSong, setCurrentSong] = useState<string>("");

  console.log("songs", songs);
  console.log("images", images);

  const handlePlay = (song: string) => {
    setCurrentSong(song);
  };

  return (
    <>
      <audio src={currentSong} autoPlay controls hidden />
      <table className="w-full">
        <thead className="border-b-[0.5px]">
          <tr className="sticky top-14 h-9 bg-black-100 text-left text-sm">
            <th className="table-cell w-1/12 text-center font-normal">#</th>
            <th className="table-cell w-4/12 font-normal ">Title</th>
            <th className="hidden w-2/12 font-normal md:table-cell">Album</th>
            <th className="hidden w-2/12 font-normal lg:table-cell">Date Added</th>
            <th className="table-cell w-1/12 text-center font-normal">
              <div className="flex items-center justify-center">
                <LuClock3 />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="">
          {songs?.map((song, index) => (
            <tr
              key={index}
              className="h-14 text-sm font-normal hover:bg-black-100"
              onClick={() => {
                handlePlay(song.url);
              }}
            >
              <td className="table-cellw-1/12 text-center">{index + 1}</td>
              <td className="table-cell w-4/12">
                <div className="flex flex-row">
                  <img
                    src={images?.find((image) => image.name === song.name)?.url}
                    alt={song.name}
                    className="h-10 w-10 rounded-sm"
                  />
                  <div className="flex flex-col justify-center pl-3">
                    <span>{song.name}</span>
                    <span className="text-xs text-gray-400">Artist</span>
                  </div>
                </div>
              </td>
              <td className="hidden w-2/12 md:table-cell">Album</td>
              <td className="hidden w-2/12 lg:table-cell">Date Added</td>
              <td className="table-cell w-1/12 text-center">Duration</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PlayListTable;
