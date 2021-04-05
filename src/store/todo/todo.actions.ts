import { Dispatch } from "react";
import { Action } from "redux";
import { TodoActionTypes } from "./todo.types";
import { TodoModel } from "../../core/models/todo.model";

export interface TodoActions extends Action {
  type: TodoActionTypes;
  payload: TodoModel | TodoModel[] | boolean;
}

export const changeTodo = (post: TodoModel): TodoActions => ({
  type: TodoActionTypes.CHANGE_TODO,
  payload: post,
});

export const changeTodos = (posts: TodoModel[]): TodoActions => ({
  type: TodoActionTypes.CHANGE_TODOS,
  payload: posts,
});

export const changeTodoStatus = (status: boolean): TodoActions => ({
  type: TodoActionTypes.GET_STATUS,
  payload: status,
});

export const getTodoListWithApi = () => {
  return async (dispatch: Dispatch<TodoActions>) => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res: Response) => {
        return res.json();
      })
      .then((res: TodoModel[]) => {
        return dispatch(changeTodos(res));
      });
  };
};
