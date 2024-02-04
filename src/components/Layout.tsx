import HeaderBar from "./HeaderBar";
import MusicPlayer from "./MusicPlayer";
import SideBar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="app" className="text-default-text bg-black-900 h-screen p-2">
      <aside className="rounded-lg [grid-area:aside]">
        <SideBar />
      </aside>
      <main className="bg-black-400 rounded-lg [grid-area:main]">
        <HeaderBar />
        {children}
      </main>
      <footer className="[grid-area:player]">
        <MusicPlayer />
      </footer>
    </div>
  );
};

export default Layout;
