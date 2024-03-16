const MainPlaylistItemSkeleton: React.FC = () => {
  return (
    <div className="group flex flex-row items-center rounded-lg bg-black-200">
      <div className="w-1/6">
        <div className="h-20 w-20 animate-pulse rounded-l-md bg-black-100" />
      </div>
      <div className="flex w-5/6 flex-row items-center justify-between px-2">
        <div className="my-1 h-4 w-full animate-pulse rounded-full bg-black-100" />
      </div>
    </div>
  );
};

export default MainPlaylistItemSkeleton;
