import React from "react";
import MainPlaylistList from "@/components/PlayList/MainPlayListList";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col px-6">
      <h1 className="text-2xl font-bold text-white">Hey User!</h1>
      <MainPlaylistList />
    </div>
  );
};

export default HomePage;
