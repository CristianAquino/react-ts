export interface MovieModel {
  id: number;
  title: string;
  imageUrl: string;
}

export interface UserModel {
  id: number;
  name: string;
  favoriteMovies: number[];
}
