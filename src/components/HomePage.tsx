import React, { useEffect } from "react";
import MainPlaylistList from "@/components/PlayList/MainPlayListList";
import usePlaylists from "@/hooks/usePlaylists";
import { Link } from "react-router-dom";
import PlayListCard from "./PlayList/Cards/PlayListCard";
import PlayListCardSkeleton from "./PlayList/Cards/PlayListCardSkeleton";

const HomePage: React.FC = () => {
  const { playLists, isLoading, fetchPlayLists } = usePlaylists();

  useEffect(() => {
    fetchPlayLists();
  }, [fetchPlayLists]);

  return (
    <div className="flex flex-col gap-4 px-6">
      <section className="mt-2">
        <h1 className="text-2xl font-bold text-white">Hey User!</h1>
        <MainPlaylistList playLists={playLists} isLoading={isLoading} />
      </section>
      <section>
        <h2 className="text-2xl font-bold text-white">Your shows</h2>
        <div className="flex flex-wrap justify-center">
          {!isLoading
            ? playLists?.map((item) => (
                <Link to={`/playlist/${item.id}`} key={item.id}>
                  <PlayListCard playList={item} />
                </Link>
              ))
            : Array.from({ length: 7 }, (_, i) => <PlayListCardSkeleton key={i} />)}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
