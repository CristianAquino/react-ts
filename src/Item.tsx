import { memo, useEffect } from "react";
import { DeleteUser, User } from "./models";

const Item = memo(
  ({ user, handleDelete }: { user: User; handleDelete: DeleteUser }) => {
    useEffect(() => {
      console.log("render Item");
    });

    return (
      <li>
        {user.name}
        <button onClick={() => handleDelete(user.id)}>Delete</button>
      </li>
    );
  }
);
export default Item;
