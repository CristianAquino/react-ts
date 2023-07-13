import { TODO_FILTERS } from "./consts.models";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
// extraemos el tipado
export type TodoId = Pick<Todo, "id">;
// forma contraria pero mismo resultado
// export type TodoId = Omit<Todo, "completed" | "title">;
export type TodoTitle = Pick<Todo, "title">;
export type TodoCompleted = Pick<Todo, "completed">;
export type TodoIdCompleted = Pick<Todo, "id" | "completed">;

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];

export type ListOfTodos = Todo[];
