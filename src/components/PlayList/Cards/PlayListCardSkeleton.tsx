const PlayListCardSkeleton = () => {
  return (
    <div className="group m-2 h-full w-48 flex-shrink-0 rounded-md bg-black-200 p-3">
      <div className="align-cen flex flex-col justify-center">
        <div className="w-42 my-1 h-44 animate-pulse rounded-md bg-black-100" />
        <div className="my-1 h-4 w-full animate-pulse rounded-full bg-black-100" />
      </div>
    </div>
  );
};

export default PlayListCardSkeleton;
