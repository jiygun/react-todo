import { Reducer } from "react";
import { TodoModel } from "../../core/models/todo.model";
import { TodoActions } from "./todo.actions";
import { initialState, TodoState } from "./todo.state";
import { TodoActionTypes } from "./todo.types";

export const getTodoListReducer: Reducer<TodoState, TodoActions> = (
  state: TodoState = initialState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.CHANGE_TODOS:
      return { ...state, todos: action.payload as TodoModel[] };
    default:
      return state;
  }
};
