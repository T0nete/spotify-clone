import React, { useEffect } from "react";
import MainPlaylistList from "@/components/PlayList/MainPlayListList";
import usePlaylists from "@/hooks/usePlaylists";
import SizedButton from "./buttons/SizedButton";

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
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {playLists?.map((item) => (
            <div className="group flex flex-col items-center gap-2 rounded-md bg-black-200 py-3 hover:bg-black-100">
              <div className="relative">
                <img src={item.cover} alt={`Image of ${item.title}`} className="h-44 w-44 rounded-sm" />
                <SizedButton
                  buttonType="play"
                  buttonSize="md"
                  iconSize="xl"
                  onClick={() => {}}
                  className="absolute bottom-1 right-1 hidden group-hover:block"
                  iconClassName="pl-1"
                />
              </div>
              <p className="text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
