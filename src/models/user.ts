export interface User {
  id: number;
  name: string;
}
export type DeleteUser = (id: number) => void;