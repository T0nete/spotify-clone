import HeaderBar from "./HeaderBar";
import MusicPlayer from "./MusicPlayer";
import SideBar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="app" className="h-screen bg-black-900 p-2 text-default-text">
      <aside className="rounded-lg [grid-area:aside]">
        <SideBar />
      </aside>
      <main className="rounded-lg bg-black-300 [grid-area:main]">
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
