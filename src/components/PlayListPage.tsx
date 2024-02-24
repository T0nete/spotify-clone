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
    <div className="">
      <div className="flex flex-row items-center gap-6 p-5">
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
      <section>
        <div className="">
          <table className="table-auto">
            <thead className="border-b-[0.5px]">
              <tr className="sticky top-14 h-9 bg-black-100 text-left text-sm">
                <th className="table-cell min-w-12 text-center">#</th>
                <th className="table-cell w-full ">Title</th>
                <th className="hidden w-full justify-start">Artist</th>
                <th className="hidden min-w-24 md:table-cell">Album</th>
                <th className="hidden w-full lg:table-cell">Date Added</th>
                <th className="table-cell min-w-12 text-center">Duration</th>
              </tr>
            </thead>
            <tbody className="">
              {playListData.songs.map((song, index) => (
                <tr key={index} className="h-14 text-sm font-normal hover:bg-black-100">
                  <td className="table-cell min-w-12 text-center">{index + 1}</td>
                  <td className="table-cell w-full">{song.title}</td>
                  <td className="hidden w-full justify-start">Artist</td>
                  <td className="hidden w-full md:table-cell">Album</td>
                  <td className="hidden w-full lg:table-cell">Date Added</td>
                  <td className="table-cell min-w-12 text-center">Duration</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
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
    </div>
  );
};

export default PlaylistPage;
