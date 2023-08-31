import { useEffect, useState } from "react";
import { getPicsum } from "../../../services";

export type InfiniteScrollButtonProps = {};

const InfiniteScrollButton = ({}: InfiniteScrollButtonProps) => {
  const [page, setPage] = useState(1);
  const [image, setImage] = useState<any>([]);

  useEffect(() => {
    getPicsum(page.toString()).then((data) =>
      setImage((prev: any) => [...prev, ...data])
    );
  }, [page]);
  return (
    <>
      <h1>InfiniteScrollButton</h1>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: "16px",
        }}
      >
        {image.map((item: any) => (
          <img
            src={item.download_url}
            key={item.id}
            width="100%"
            alt={item.author}
          />
        ))}
      </div>
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
    </>
  );
};

export default InfiniteScrollButton;
