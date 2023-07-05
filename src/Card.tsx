import { useEffect, useRef, useState } from "react";
import { getPost } from "./helpers";
import { Post } from "./models";

const initialPost: Post = {
  title: "",
};

const Card = () => {
  const [post, setPost] = useState<Post>(initialPost);
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef<boolean>(true);

  const updatePost = () => {
    getPost().then((post) => {
      setTimeout(() => {
        if (!isMountedRef.current) {
          setPost(post);
          setLoading(false);
          isMountedRef.current = true;
        }
      }, 2000);
    });
  };

  useEffect(() => {
    updatePost();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>{post.title}</div>;
};
export default Card;
