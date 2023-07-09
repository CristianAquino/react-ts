import { createContext, useState } from "react";
import { UserModel } from "../models";

interface UserContextModel {
  user: UserModel | null;
  login: () => void;
  logout: () => void;
  toggleFavoriteMovieToUser: (movieId: number) => void;
}
const initialUser = {
  id: 1,
  name: "Cristian",
  favoriteMovies: [1, 2, 3],
};

const UserContext = createContext<UserContextModel>({} as UserContextModel);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setuser] = useState<UserModel | null>(initialUser);

  const login = () => {
    setuser(initialUser);
  };

  const logout = () => {
    setuser(null);
  };

  const toggleFavoriteMovieToUser = (movieId: number) => {
    if (user) {
      const isFavorite = user.favoriteMovies.includes(movieId);
      const favoriteMovies = isFavorite
        ? user.favoriteMovies.filter((id) => id !== movieId)
        : [...user.favoriteMovies, movieId];
      setuser({ ...user, favoriteMovies });
    }
  };

  const data = { user, login, logout, toggleFavoriteMovieToUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
