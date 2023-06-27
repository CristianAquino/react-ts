import { useState } from "react";

function App() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hola");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      alert(`sending to: ${to}\n message: ${message}`);
    }, 5000);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
