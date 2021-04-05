import { TodoModel } from "../../core/models/todo.model";

export interface TodoBasketState {
  todos: TodoModel[];
}

export let initialState: TodoBasketState = {
  todos: [],
};
