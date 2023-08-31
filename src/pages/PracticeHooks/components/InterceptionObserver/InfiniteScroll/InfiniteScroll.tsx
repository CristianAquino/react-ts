import { useEffect, useRef, useState } from "react";
import { getPicsum } from "../../../services";

export type InfiniteScrollProps = {};

const InfiniteScroll = ({}: InfiniteScrollProps) => {
  const boxRef = useRef<HTMLImageElement>(null);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState<any>([]);

  useEffect(() => {
    getPicsum(page.toString()).then((data) =>
      setImage((prev: any) => [...prev, ...data])
    );
  }, [page]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    if (image.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { root: null, threshold: 1 }
    );
    observer.observe(box);
    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <>
      <h1>InfiniteScroll</h1>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: "16px",
        }}
      >
        {image.map((item: any, index: number) => {
          if (image.length === index + 1) {
            return (
              <img
                ref={boxRef}
                src={item.download_url}
                key={item.id}
                width="100%"
                alt={item.author}
              />
            );
          }
          return (
            <img
              src={item.download_url}
              key={item.id}
              width="100%"
              alt={item.author}
            />
          );
        })}
      </div>
    </>
  );
};

export default InfiniteScroll;
