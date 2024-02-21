import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlayList, playlist } from "../constants/playlist";

interface PlaylistPageProps {}

const PlaylistPage: React.FC<PlaylistPageProps> = () => {
  const { id } = useParams();

  const [playListData, setPlayListData] = useState<PlayList>();

  useEffect(() => {
    if (!id) return;
    setPlayListData(playlist.find((playlist) => playlist.id === id));
  }, [id]);

  if (!playListData) return null;

  return (
    <div className="overflow-y-auto p-5">
      <div className="flex h-64 flex-row items-center gap-6 pb-5">
        <img src={playListData.cover} alt={playListData.title} className="h-full rounded-md" />
        <div className="flex flex-col gap-5 text-sm">
          <div className="flex flex-col text-white">
            <p className="">Playlist</p>
            <h1 className="text-8xl font-bold ">{playListData.title}</h1>
          </div>
          <div className="flex flex-row">
            <p>{playListData.description}</p>
            <p>{playListData.songs.length} songs</p>
          </div>
        </div>
      </div>

      <div className=" p-2">
        {/* SONGS TABLE */}
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-b-[#b3b3b3]">
              <th className="text-left">#</th>
              <th className="text-left">Title</th>
              <th className="md:hiddens text-left">Artist</th>
              <th className="md:hiddens text-left">Album</th>
              <th className="md:hiddens text-left">Date Added</th>
              <th className="text-left">Duration</th>
            </tr>
          </thead>
          <tbody>
            {playListData.songs.map((song, index) => (
              <tr key={index} className="h-6 border-b-2 border-b-[#b3b3b3]">
                <td>{index + 1}</td>
                <td>{song.title}</td>
                <td>Artist</td>
                <td>Album</td>
                <td>Date Added</td>
                <td>Duration</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul>
        {/* {playlist.map((song, index) => (
          <li key={index}>{song}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default PlaylistPage;
