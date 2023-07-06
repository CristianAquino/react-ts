import { memo, useEffect } from "react";

interface Props {
  id: number;
  name: string;
}

// en este casos con el memo solo
// se renderiza el item agregado
const Item = memo(({ user }: { user: Props }) => {
  useEffect(() => {
    console.log("render Item " + user.name);
  });

  return <li>{user.name}</li>;
});
export default Item;
