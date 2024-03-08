import { SupabaseContext } from "@/providers/SupabaseProvider";
import { useCallback, useContext, useEffect, useState } from "react";
import { PlaylistData } from "./usePlaylistSongs";

export interface IUserPlaylistSongs {
  playLists: PlaylistData[] | undefined;
  fetchPlayLists: () => Promise<void>;
}
export const usePlaylists = (): IUserPlaylistSongs => {
  const context = useContext(SupabaseContext);

  const [playLists, setPlayLists] = useState<PlaylistData[]>();

  if (!context) {
    throw new Error("useBucketData must be used within a SupabaseProvider");
  }

  const { supabase } = context;

  const fetchPlayLists = useCallback(async () => {
    try {
      const { data: playLists, error } = await supabase.from("playlist").select("*");

      playLists?.forEach((playlist) => {
        const playlistCover = fetchPlaylistCover(playlist.id);
        playlist.cover = playlistCover;
      });

      if (error) {
        throw error;
      }

      setPlayLists(playLists);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchPlaylistCover = (playlistId: string): string => {
    try {
      const { data: playlistCover } = supabase.storage.from("images/playlist").getPublicUrl(`${playlistId}`);
      return playlistCover.publicUrl;
    } catch (error) {
      if (error instanceof Error) console.error(error);
      return "";
    }
  };

  return {
    playLists,
    fetchPlayLists,
  };
};

export default usePlaylists;
