import { memo } from "react";
import { User } from "./models";

const Item = memo(({ user }: { user: User }) => {
  return <li>{user.name}</li>;
});
export default Item;
