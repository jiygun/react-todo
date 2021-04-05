import { Reducer } from "react";
import { TodoModel } from "../../core/models/todo.model";
import { TodoActions } from "./todo.actions";
import { initialState, TodoState } from "./todo.state";
import { TodoActionTypes } from "./todo.types";

export const todoReducer: Reducer<TodoState, TodoActions> = (
  state: TodoState = initialState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.CHANGE_TODO:
      return { ...state, todo: action.payload as TodoModel };
    case TodoActionTypes.GET_STATUS:
      return { ...state, status: action.payload as boolean };
    default:
      return state;
  }
};
