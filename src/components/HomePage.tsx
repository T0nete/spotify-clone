import React, { useEffect } from "react";
import MainPlaylistList from "@/components/PlayList/MainPlayListList";
import usePlaylists from "@/hooks/usePlaylists";
import { Link } from "react-router-dom";
import PlayListCard from "./PlayList/PlayListCard";

const HomePage: React.FC = () => {
  const { playLists, fetchPlayLists } = usePlaylists();

  useEffect(() => {
    fetchPlayLists();
  }, [fetchPlayLists]);

  return (
    <div className="flex flex-col gap-4 px-6">
      <section className="mt-2">
        <h1 className="text-2xl font-bold text-white">Hey User!</h1>
        <MainPlaylistList playLists={playLists} />
      </section>
      <section>
        <h2 className="text-2xl font-bold text-white">Your shows</h2>
        <div className="flex flex-wrap justify-center">
          {playLists?.map((item) => (
            <Link to={`/playlist/${item.id}`} key={item.id}>
              <PlayListCard playList={item} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
