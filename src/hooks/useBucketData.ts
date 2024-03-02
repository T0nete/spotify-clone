import { useContext, useEffect, useState } from "react";
import { SupabaseContext } from "../providers/SupabaseProvider";

interface IBucketData {
  name: string;
  url: string;
}
type UseBucketDataResult = {
  songs: IBucketData[] | null;
  images: IBucketData[] | null;
  error: Error | null;
  isLoading: boolean;
};

export const useBucketData = (): UseBucketDataResult => {
  const context = useContext(SupabaseContext);
  const [songs, setSongs] = useState<IBucketData[] | null>(null);
  const [images, setImages] = useState<IBucketData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (!context) {
    throw new Error("useBucketData must be used within a SupabaseProvider");
  }

  const { supabase } = context;

  useEffect(() => {
    const fetchBucketData = async () => {
      try {
        const { data: songsData, error: songsError } = await supabase.storage.from("songs").list();

        if (songsError) {
          throw songsError;
        }

        const songsUrls =
          songsData?.map((song) => {
            const url = supabase.storage.from("songs").getPublicUrl(song.name);
            return { name: song.name, url: url.data.publicUrl };
          }) || [];

        const { data: imagesData, error: imagesError } = await supabase.storage.from("images").list();
        const imagesUrls =
          imagesData?.map((image) => {
            const url = supabase.storage.from("images").getPublicUrl(image.name);
            return { name: image.name, url: url.data.publicUrl };
          }) || [];

        if (imagesError) {
          throw imagesError;
        }

        setSongs(songsUrls);
        setImages(imagesUrls);
      } catch (error) {
        if (error instanceof Error) setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBucketData();
  }, [supabase]);

  return { songs, images, error, isLoading };
};

export default useBucketData;
