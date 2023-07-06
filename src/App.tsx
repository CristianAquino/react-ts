import { useEffect, useState } from "react";
import List from "./List";

const initialUser = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Maria" },
];

const App = () => {
  const [users, setusers] = useState(initialUser);
  const [text, settext] = useState("");

  const handleAdd = () => {
    const newUser = { id: users[users.length - 1].id + 1, name: text };
    setusers([...users, newUser]);
    settext("");
  };

  useEffect(() => {
    console.log("render App");
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <List users={users} />
    </div>
  );
};
export default App;
