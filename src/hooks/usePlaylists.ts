import { SupabaseContext } from "@/providers/SupabaseProvider";
import { useCallback, useContext, useState } from "react";
import { PlaylistData } from "./usePlaylistSongs";

export interface IUserPlaylistSongs {
  playLists: PlaylistData[] | undefined;
  isLoading: boolean;
  fetchPlayLists: () => Promise<void>;
}
export const usePlaylists = (): IUserPlaylistSongs => {
  const context = useContext(SupabaseContext);

  const [playLists, setPlayLists] = useState<PlaylistData[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!context) {
    throw new Error("useBucketData must be used within a SupabaseProvider");
  }

  const { supabase } = context;

  const fetchPlayLists = useCallback(async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
    isLoading,
    fetchPlayLists,
  };
};

export default usePlaylists;
