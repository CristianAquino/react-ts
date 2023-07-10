export interface TodosModels {
  id: number;
  title: string;
}

export type TodosAction =
  | { type: "add"; payload: TodosModels }
  | { type: "delete"; payload: number }
  | { type: "update"; payload: TodosModels };
