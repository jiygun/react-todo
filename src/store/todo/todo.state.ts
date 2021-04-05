import { TodoModel } from "../../core/models/todo.model";

export interface TodoState {
  todo: TodoModel;
  todos: TodoModel[];
  status?: boolean;
}

export let initialState: TodoState = {
  todo: {},
  todos: [],
};
