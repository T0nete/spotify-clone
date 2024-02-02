import React from "react";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import MusicPlayer from "./components/MusicPlayer";

import "./App.css";

const App: React.FC = () => {
  return (
    <div id="app" className="h-screen bg-black p-2">
      <aside className="rounded-lg [grid-area:aside]">
        <SideBar />
      </aside>
      <main className="rounded-lg bg-[#121212] [grid-area:main]">
        <MainContent />
      </main>
      <footer className="[grid-area:player]">
        <MusicPlayer />
      </footer>
    </div>
  );
};

export default App;
