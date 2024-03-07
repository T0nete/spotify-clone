import HeaderBar from "@/components/HeaderBar";
import MusicPlayer from "@/components/MusicPlayer";
import SideBar from "@/components/SideBar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="app" className="font-circular h-screen bg-black-900 p-2 text-default-text">
      <aside className="overflow-y-auto rounded-lg [grid-area:aside]">
        <SideBar />
      </aside>
      <main className="max-h-dvh overflow-y-auto rounded-lg bg-black-300 [grid-area:main]">
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
