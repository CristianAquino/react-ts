import { memo, useEffect } from "react";
import Item from "./Item";
import { DeleteUser, User } from "./models";

const List = memo(
  ({ users, handleDelete }: { users: User[]; handleDelete: DeleteUser }) => {
    useEffect(() => {
      console.log("render List");
    });
    return (
      <ul>
        {users.map((user) => (
          <Item key={user.id} user={user} handleDelete={handleDelete} />
        ))}
      </ul>
    );
  }
);
export default List;
