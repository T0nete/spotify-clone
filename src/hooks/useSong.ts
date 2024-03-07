import { useContext, useState } from "react";
import { SupabaseContext } from "../providers/SupabaseProvider";
import { Song } from "@/types/song";

interface ISongDetail extends Song {
  imageUrl: string;
  audioFile: string;
}
type IUseSong = {
  songs: ISongDetail[] | null;
  error: Error | null;
  isLoading: boolean;
  fetchSongDetails: (songs: Song[]) => Promise<void>;
};

export const useSong = (): IUseSong => {
  const context = useContext(SupabaseContext);
  const [songs, setSongs] = useState<ISongDetail[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (!context) {
    throw new Error("useBucketData must be used within a SupabaseProvider");
  }

  const { supabase } = context;

  const fetchSongDetails = async (songs: Song[]): Promise<void> => {
    try {
      setIsLoading(true);
      const songDetailsPromises = songs.map(async (song) => {
        const imageUrl = supabase.storage.from("images/songs").getPublicUrl(song.id);
        const audioFile = supabase.storage.from("songs").getPublicUrl(song.id);

        return {
          ...song,
          imageUrl: imageUrl.data.publicUrl,
          audioFile: audioFile.data.publicUrl,
        };
      });

      const songDetails = await Promise.all(songDetailsPromises);
      setSongs(songDetails);
    } catch (error) {
      if (error instanceof Error) setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // const fetchBucketData = async () => {
  //   try {
  //     const { data: songsData, error: songsError } = await supabase.storage.from("songs").list();

  //     if (songsError) {
  //       throw songsError;
  //     }

  //     const songsUrls =
  //       songsData?.map((song) => {
  //         const url = supabase.storage.from("songs").getPublicUrl(song.name);
  //         return { name: song.name, url: url.data.publicUrl };
  //       }) || [];

  //     const { data: imagesData, error: imagesError } = await supabase.storage.from("images").list();
  //     const imagesUrls =
  //       imagesData?.map((image) => {
  //         const url = supabase.storage.from("images").getPublicUrl(image.name);
  //         return { name: image.name, url: url.data.publicUrl };
  //       }) || [];

  //     if (imagesError) {
  //       throw imagesError;
  //     }

  //     setSongs(songsUrls);
  //     setImages(imagesUrls);
  //   } catch (error) {
  //     if (error instanceof Error) setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return { songs, error, isLoading, fetchSongDetails };
};

export default useSong;
