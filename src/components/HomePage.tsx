import React from "react";
import MainPlaylistList from "@/components/PlayList/MainPlayListList";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col px-6">
      <section className="my-4">
        <h1 className="text-2xl font-bold text-white">Hey User!</h1>
        <MainPlaylistList />
      </section>
      <section>
        <h1 className="text-2xl font-bold text-white">Your shows</h1>
      </section>
    </div>
  );
};

export default HomePage;
