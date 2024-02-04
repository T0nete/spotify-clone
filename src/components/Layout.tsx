import MusicPlayer from "./MusicPlayer";
import SideBar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="app" className="h-screen bg-black p-2">
      <aside className="rounded-lg [grid-area:aside]">
        <SideBar />
      </aside>
      <main className="rounded-lg bg-[#121212] [grid-area:main]">
        {children}
      </main>
      <footer className="[grid-area:player]">
        <MusicPlayer />
      </footer>
    </div>
  );
};

export default Layout;
