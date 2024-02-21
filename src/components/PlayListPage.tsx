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
      <div className="flex flex-row items-center gap-6">
        <img src={playListData.cover} alt={playListData.title} className="h-32 w-32 rounded-md xl:h-60 xl:w-60" />
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex flex-col text-white">
            <p className="">Playlist</p>
            <h1 className="text-3xl font-bold lg:text-7xl xl:text-8xl ">{playListData.title}</h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">{playListData.description}</p>
            <p className="text-xs">
              <span className="font-semibold">{playListData.songs.length}</span> songs
            </p>
          </div>
        </div>
      </div>

      {/* SONGS TABLE */}
      {/* <div className=" p-2">
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
      </div> */}
      <ul>
        {/* {playlist.map((song, index) => (
          <li key={index}>{song}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default PlaylistPage;
