import { useState } from "react";

interface Art {
  id: number;
  title: string;
  seen: boolean;
}

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

function ItemList({
  artworks,
  onToggle,
}: {
  artworks: Art[];
  onToggle: (id: number) => void;
}) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={() => onToggle(artwork.id)}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [list, setList] = useState<Art[]>(initialList);

  const handleToggle = (id: number) => {
    const nuevo = list.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          seen: !ele.seen,
        };
      }
      return ele;
    });
    setList(nuevo);
  };
  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggle} />
    </>
  );
}

export default App;
