import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlayList, playlist } from "@/constants/playlist";
import PlayListTable from "@/components/PlayList/PlayListTable";
import PlaylistCommandButtons from "@/components/PlayList/PlaylistCommandButtons";

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
      <section>
        <PlaylistCommandButtons />
      </section>
      {/* SONGS TABLE */}
      <section>
        <PlayListTable playListData={playListData} />
      </section>
    </div>
  );
};

export default PlaylistPage;
