import { Action } from "redux";
import { TodoBasketActionTypes } from "./todo-basket.types";
import { TodoModel } from "../../core/models/todo.model";

export interface TodoBasketActions extends Action {
  type: TodoBasketActionTypes;
  payload: TodoModel;
}

export const addTodo = (todo: TodoModel): TodoBasketActions => ({
  type: TodoBasketActionTypes.ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todo: TodoModel): TodoBasketActions => ({
  type: TodoBasketActionTypes.DELETE_TODO,
  payload: todo,
});
