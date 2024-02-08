import React from "react";

interface PlaylistPageProps {}

const PlaylistPage: React.FC<PlaylistPageProps> = () => {
  return (
    <div>
      <h1>Playlist Page</h1>
      <ul>
        {/* {playlist.map((song, index) => (
          <li key={index}>{song}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default PlaylistPage;
