import { memo } from "react";
import Item from "./Item";
import { User } from "./models";

const List = memo(({ users }: { users: User[] }) => {
  return (
    <ul>
      {users.map((user) => (
        <Item key={user.id} user={user} />
      ))}
    </ul>
  );
});
export default List;
