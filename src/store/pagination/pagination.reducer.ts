import { Reducer } from "react";
import { PaginationActions } from "./pagination.actions";
import { initialState, PaginationState } from "./pagination.state";
import { PaginationActionTpyes } from "./pagination.types";

export const paginationReducer: Reducer<PaginationState, PaginationActions> = (
  state: PaginationState = initialState,
  action: PaginationActions
): PaginationState => {
  switch (action.type) {
    case PaginationActionTpyes.CHANGE_PAGE:
      return { ...state, page: action.payload as number };
    default:
      return state;
  }
};
