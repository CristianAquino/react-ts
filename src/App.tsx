import { ChangeEvent, ReactEventHandler, useState } from "react";
interface PersonArtwork {
  title: string;
  city: string;
  image: string;
}
interface Person {
  name: string;
  artwork: PersonArtwork;
}

const initialState = {
  name: "Niki de Saint Phalle",
  artwork: {
    title: "Blue Nana",
    city: "Hamburg",
    image: "https://i.imgur.com/Sd1AgUOm.jpg",
  },
};

function App() {
  const [person, setPerson] = useState<Person>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, [e.target.name]: e.target.value },
    });
  };

  return (
    <>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={person.artwork.title}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={person.artwork.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={person.artwork.image}
          onChange={handleChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i> by {person.name}
        <br /> (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}

export default App;
