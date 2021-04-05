import { Action } from "redux";
import { PaginationActionTpyes } from "./pagination.types";

export interface PaginationActions extends Action {
  type: PaginationActionTpyes;
  payload: number | number[];
}

export const changePage = (page: number): PaginationActions => ({
  type: PaginationActionTpyes.CHANGE_PAGE,
  payload: page,
});
