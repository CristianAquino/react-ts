import { memo, useEffect } from "react";
import Item from "./Item";

interface Props {
  id: number;
  name: string;
}

// en este caso si los users cambian entonces
// el componente debiar volver a rederizarse
const List = memo(({ users }: { users: Props[] }) => {
  useEffect(() => {
    console.log("render List");
  });

  return (
    <ul>
      {users.map((user: Props) => (
        <Item key={user.id} user={user}></Item>
      ))}
    </ul>
  );
});
export default List;
