import { useCallback, useEffect, useMemo, useState } from "react";
import { User } from "./models";
import List from "./List";

const initialUsers = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const App = () => {
  const [users, setusers] = useState<User[]>(initialUsers);
  const [text, settext] = useState("");
  const [searc, setSearc] = useState("");

  const handleAdd = () => {
    let newUser;
    if (users.length == 0) {
      newUser = { id: 1, name: text };
    } else {
      newUser = { id: users[users.length - 1].id + 1, name: text };
    }
    setusers([...users, newUser]);
  };

  const filterUser = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLocaleLowerCase().includes(searc.toLocaleLowerCase())
      ),
    [searc, users]
  );

  const handleSearch = () => {
    setSearc(text);
  };

  // memorizamos en base a users ya que en cada proceso
  // de eliminacion cambia
  const handleDelete = useCallback(
    (userId: number) => {
      setusers(users.filter((user) => user.id !== userId));
    },
    [users]
  );

  /* si esta funcion lo ponemos en el array de dependencia,
  por cada render del input aparecera el mensaje ocasionado
  una redefinicion en cada render 
  para que no ocurra eso usamos useCallback */
  const printUsers = useCallback(() => {
    console.log("change users", users);
  }, [users]);

  useEffect(() => {
    console.log("render App");
  });

  useEffect(() => {
    printUsers();
  }, [users, printUsers]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={filterUser} handleDelete={handleDelete} />
    </div>
  );
};
export default App;
