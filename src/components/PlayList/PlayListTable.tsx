import { LuClock3 } from "react-icons/lu";
import { useEffect, useState } from "react";
import { Song } from "@/types/song";
import { useSong } from "@/hooks/useSong";
import { getDuration } from "@/utils/utils";

interface PlayListTableProps {
  playListData: Song[];
}
const PlayListTable: React.FC<PlayListTableProps> = ({ playListData }) => {
  const { songs, error, isLoading, fetchSongDetails } = useSong();

  const [currentSong, setCurrentSong] = useState<string>("");

  useEffect(() => {
    if (playListData) {
      fetchSongDetails(playListData);
    }
  }, []);

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
                handlePlay(song.audioFile);
              }}
            >
              <td className="table-cellw-1/12 text-center">{index + 1}</td>
              <td className="table-cell w-4/12">
                <div className="flex flex-row">
                  <img src={song.imageUrl} alt={song.title} className="h-10 w-10 rounded-sm" />
                  <div className="flex flex-col justify-center pl-3">
                    <span>{song.title}</span>
                    <span className="text-xs text-gray-400">{song.artist}</span>
                  </div>
                </div>
              </td>
              <td className="hidden w-2/12 md:table-cell">{song.album}</td>
              <td className="hidden w-2/12 lg:table-cell">Date Added</td>
              <td className="table-cell w-1/12 text-center">{getDuration(song.duration)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PlayListTable;
