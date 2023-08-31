export const getPicsum = (page: string) => {
  return fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
