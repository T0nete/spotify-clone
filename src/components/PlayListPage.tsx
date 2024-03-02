import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaylistCommandButtons from "@/components/PlayList/PlaylistCommandButtons";
import PlayListTable from "@/components/PlayList/PlayListTable";
import { usePlaylistSongs } from "@/hooks/usePlaylistSongs";

interface PlaylistPageProps {}

const PlaylistPage: React.FC<PlaylistPageProps> = () => {
  const { id } = useParams();

  const {
    playlistData,
    playlistSongs,
    isLoadingPlaylistData,
    isLoadingPlaylistSongs,
    fetchPlaylist,
    fetchPlaylistSongs,
  } = usePlaylistSongs();

  useEffect(() => {
    if (!id) return;
    fetchPlaylist(id);
    fetchPlaylistSongs(id);
  }, []);

  if (!id) return;

  return (
    <div className="">
      <div className="flex flex-row items-center gap-6 p-5">
        <img src={playlistData?.cover} alt={playlistData?.title} className="h-32 w-32 rounded-md xl:h-60 xl:w-60" />
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex flex-col text-white">
            <p className="">Playlist</p>
            <h1 className="text-3xl font-bold lg:text-7xl xl:text-8xl ">{playlistData?.title}</h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Description playlist</p>
            <p className="text-xs">
              <span className="font-semibold">{playlistSongs?.length}</span> songs
            </p>
          </div>
        </div>
      </div>
      <section>
        <PlaylistCommandButtons />
      </section>
      {/* SONGS TABLE */}
      <section>{playlistSongs && <PlayListTable playListData={playlistSongs} />}</section>
    </div>
  );
};

export default PlaylistPage;
