import { Reducer } from "react";
import { TodoModel } from "../../core/models/todo.model";
import { TodoBasketState } from "./todo-basket.state";
import { TodoBasketActions } from "./todo-basket.actions";
import { initialState } from "./todo-basket.state";
import { TodoBasketActionTypes } from "./todo-basket.types";

export const todoBasketReducer: Reducer<TodoBasketState, TodoBasketActions> = (
  state: TodoBasketState = initialState,
  action: TodoBasketActions
): TodoBasketState => {
  switch (action.type) {
    case TodoBasketActionTypes.ADD_TODO:
      if (!state.todos.find((t) => t.id === action.payload.id))
        return {
          ...state,
          todos: [...state.todos, action.payload as TodoModel],
        };
      else return state;
    case TodoBasketActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (t) => t.id !== (action.payload as TodoModel).id
        ),
      };
    default:
      return state;
  }
};
