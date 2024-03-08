import { useCallback, useContext, useState } from "react";
import { SupabaseContext } from "@/providers/SupabaseProvider";
import { Playlist } from "@/types/playlist";
import { Song } from "@/types/song";

export interface PlaylistData extends Playlist {
  cover: string;
}
interface IUserPlaylistSongs {
  playlistData: PlaylistData | undefined;
  playlistSongs: Song[] | undefined;
  isLoadingPlaylistData: boolean;
  isLoadingPlaylistSongs: boolean;
  fetchPlaylist: (playlistId: string) => Promise<void>;
  fetchPlaylistSongs: (playlistId: string) => Promise<void>;
}
export const usePlaylistSongs = (): IUserPlaylistSongs => {
  const context = useContext(SupabaseContext);

  const [playlistData, setPlaylistData] = useState<PlaylistData>();
  const [playlistSongs, setPlaylistSongs] = useState<Song[]>();

  const [isLoadingPlaylistData, setIsLoadingPlaylistData] = useState<boolean>(false);
  const [isLoadingPlaylistSongs, setIsLoadingPlaylistSongs] = useState<boolean>(false);

  if (!context) {
    throw new Error("useBucketData must be used within a SupabaseProvider");
  }

  const { supabase } = context;

  const fetchPlaylist = useCallback(async (playlistId: string) => {
    setIsLoadingPlaylistData(true);
    setPlaylistData(undefined);
    const playlistData = await fetchPlaylistData(playlistId);
    const playlistCover = fetchPlaylistCover(playlistId);

    setPlaylistData({
      ...playlistData,
      cover: playlistCover,
    });

    setIsLoadingPlaylistData(false);
  }, []);

  const fetchPlaylistData = useCallback(async (playlistId: string): Promise<Playlist> => {
    try {
      const { data: playlistData, error: playlistError } = await supabase
        .from("playlist")
        .select("*")
        .eq("id", playlistId)
        .single();

      if (playlistError) {
        throw playlistError;
      }

      return playlistData;
    } catch (error) {
      if (error instanceof Error) console.error(error);
      return {} as Playlist;
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

  const fetchPlaylistSongs = useCallback(
    async (playlistId: string) => {
      try {
        setIsLoadingPlaylistSongs(true);
        setPlaylistSongs(undefined);
        const { data: playlistSongs, error: playlistError } = await supabase
          .from("playlist_song")
          .select("song:id_song (id, title, artist, album, duration, created_at)")
          .eq("id_playlist", playlistId);

        if (playlistError) {
          throw playlistError;
        }

        const songs = playlistSongs.flatMap((song) => {
          return song.song;
        });

        setPlaylistSongs(songs);
      } catch (error) {
        if (error instanceof Error) console.error(error);
      } finally {
        setIsLoadingPlaylistSongs(false);
      }
    },
    [supabase],
  );

  return {
    playlistData,
    playlistSongs,
    isLoadingPlaylistData,
    isLoadingPlaylistSongs,
    fetchPlaylist,
    fetchPlaylistSongs,
  };
};
