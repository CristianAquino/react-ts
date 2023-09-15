import { Tweet } from "react-tweet";

export type ReactTweetProps = {
  url: string;
};

const ReactTweet = ({ url }: ReactTweetProps) => {
  const index = url.lastIndexOf("/");
  const id = url.slice(index + 1);
  return (
    <div>
      <Tweet id={id} fallback={<h1>Loading...</h1>} />
    </div>
  );
};

export default ReactTweet;
