import { useCatFact, useCatImage } from "./hooks";

export type CatFactProps = {};

const CatFact = ({}: CatFactProps) => {
  const { fact, getRandomFact } = useCatFact();
  const { imageURL } = useCatImage({ fact });
  const handleClick = () => {
    getRandomFact();
  };
  return (
    <main>
      <p>{fact ?? "Loading..."}</p>
      <button onClick={handleClick}>New Fact</button>
      {fact && (
        <img
          src={imageURL}
          alt={`image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
};

export default CatFact;
