export interface PlayList {
  id: string;
  cover: string;
  title: string;
  songs: PlayListItem[];
}

export interface PlayListItem {
  id: string;
  cover: string;
  title: string;
}
export const playlist: PlayList[] = [
  {
    id: "1",
    cover: "https://via.placeholder.com/64",
    title: "Top 50: España",
    songs: [
      {
        id: "1",
        cover: "https://via.placeholder.com/64",
        title: "Song 1",
      },
      {
        id: "2",
        cover: "https://via.placeholder.com/64",
        title: "Song 2",
      },
      {
        id: "3",
        cover: "https://via.placeholder.com/64",
        title: "Song 3",
      },
    ],
  },
  {
    id: "2",
    cover: "https://via.placeholder.com/64",
    title: "lofi covers",
    songs: [
      {
        id: "1",
        cover: "https://via.placeholder.com/64",
        title: "Song 1",
      },
      {
        id: "2",
        cover: "https://via.placeholder.com/64",
        title: "Song 2",
      },
      {
        id: "3",
        cover: "https://via.placeholder.com/64",
        title: "Song 3",
      },
    ],
  },
  {
    id: "3",
    cover: "https://via.placeholder.com/64",
    title: "LA ÚLTIMA",
    songs: [
      {
        id: "1",
        cover: "https://via.placeholder.com/64",
        title: "Song 1",
      },
      {
        id: "2",
        cover: "https://via.placeholder.com/64",
        title: "Song 2",
      },
      {
        id: "3",
        cover: "https://via.placeholder.com/64",
        title: "Song 3",
      },
    ],
  },
  {
    id: "4",
    cover: "https://via.placeholder.com/64",
    title: "Top 50: Global",
    songs: [
      {
        id: "1",
        cover: "https://via.placeholder.com/64",
        title: "Song 1",
      },
      {
        id: "2",
        cover: "https://via.placeholder.com/64",
        title: "Song 2",
      },
      {
        id: "3",
        cover: "https://via.placeholder.com/64",
        title: "Song 3",
      },
    ],
  },
  {
    id: "5",
    cover: "https://via.placeholder.com/64",
    title: "What Now? with Trevor Noah",
    songs: [
      {
        id: "1",
        cover: "https://via.placeholder.com/64",
        title: "Song 1",
      },
      {
        id: "2",
        cover: "https://via.placeholder.com/64",
        title: "Song 2",
      },
      {
        id: "3",
        cover: "https://via.placeholder.com/64",
        title: "Song 3",
      },
    ],
  },
  {
    id: "6",
    cover: "https://via.placeholder.com/64",
    title: "GRX",
    songs: [
      {
        id: "1",
        cover: "https://via.placeholder.com/64",
        title: "Song 1",
      },
      {
        id: "2",
        cover: "https://via.placeholder.com/64",
        title: "Song 2",
      },
      {
        id: "3",
        cover: "https://via.placeholder.com/64",
        title: "Song 3",
      },
    ],
  },
];
