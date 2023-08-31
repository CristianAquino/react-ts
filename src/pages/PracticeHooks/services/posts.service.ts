const URL = "https://jsonplaceholder.typicode.com/comments?postId=";
export const getPostById = (id: string) => {
  return fetch(URL + id)
    .then((res) => res.json())
    .then((data) => data);
};
