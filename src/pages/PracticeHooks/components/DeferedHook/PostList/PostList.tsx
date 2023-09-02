import { useEffect, useState } from "react";
import { getPostById } from "../../../services";

export type PostListProps = {
  id: string;
};

type Post = {
  id: number;
  name: string;
  email: string;
};

const PostList = ({ id }: PostListProps) => {
  const [post, setPost] = useState<Post[]>([]);
  useEffect(() => {
    async function getPost() {
      const post = await getPostById(id);
      setPost(post);
    }
    getPost();
  }, [id]);
  return (
    <div>
      {post.length > 0 && (
        <ul>
          {post.map((item) => (
            <li
              key={item.id}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
                listStyle: "none",
              }}
            >
              <span>{item.name}</span> <br />
              <span>{item.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
