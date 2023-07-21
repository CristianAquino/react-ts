export const createUserAdapter = (user: any) => ({
  id: user.data.id,
  name: user.data.name,
  email: user.data.species,
  rol: user.data.status,
});
