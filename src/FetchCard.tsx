import { useEffect, useState } from "react";
import { getPosts, getUser } from "./helpers";
import { UserAPI, UserPost } from "./models";

const initialUser: UserAPI = {
  id: 0,
  name: "",
  email: "",
};

const initialPosts: UserPost[] = [{ id: 0, title: "title1" }];

const FetchCard = () => {
  const [user, setuser] = useState<UserAPI>(initialUser);
  const [posts, setposts] = useState<UserPost[]>(initialPosts);

  const updateUser = () => {
    getUser().then((data) => {
      setuser(data);
    });
  };

  const updatePosts = () => {
    getPosts(user.id).then((data) => {
      setposts(data);
    });
  };

  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    if (user.id !== 0) {
      updatePosts();
    }
  }, [user]);

  return (
    <div>
      <button onClick={updateUser}>Another User</button>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <br />
      <h2>Posts - user: {user.id}</h2>
      <ul>
        {posts.map((post: UserPost) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default FetchCard;
