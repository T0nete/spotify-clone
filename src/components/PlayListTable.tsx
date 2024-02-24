import { PlayList } from "../constants/playlist";

interface PlayListTableProps {
  playListData: PlayList;
}
const PlayListTable: React.FC<PlayListTableProps> = ({ playListData }) => {
  return (
    <table className="w-full">
      <thead className="border-b-[0.5px]">
        <tr className="sticky top-14 h-9 bg-black-100 text-left text-sm">
          <th className="table-cell w-1/12 text-center font-normal">#</th>
          <th className="table-cell w-4/12 font-normal ">Title</th>
          <th className="hidden w-2/12 font-normal md:table-cell">Album</th>
          <th className="hidden w-2/12 font-normal lg:table-cell">Date Added</th>
          <th className="table-cell w-1/12 text-center font-normal">Duration</th>
        </tr>
      </thead>
      <tbody className="">
        {playListData.songs.map((song, index) => (
          <tr key={index} className="h-14 text-sm font-normal hover:bg-black-100">
            <td className="table-cellw-1/12 text-center">{index + 1}</td>
            <td className="table-cell w-4/12">{song.title}</td>
            <td className="hidden w-2/12 md:table-cell">Album</td>
            <td className="hidden w-2/12 lg:table-cell">Date Added</td>
            <td className="table-cell w-1/12 text-center">Duration</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayListTable;
