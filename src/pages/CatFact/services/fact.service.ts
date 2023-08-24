const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getFact = () =>
  fetch(CAT_ENDPOINT_RANDOM_FACT).then((res) => res.json());

export const getImage = (threeFirstWords: string) =>
  fetch(
    `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
  ).then((res) => res.json());
