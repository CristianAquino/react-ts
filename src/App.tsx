import { useMemo, useState } from "react";
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
    const newUser = { id: users[users.length - 1].id + 1, name: text };
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

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={filterUser} />
    </div>
  );
};
export default App;
