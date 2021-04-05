import { Reducer } from "react";
import { UserModel } from "../../core/models/user.model";
import { UserActions } from "./user.actions";
import { initialState, UserState } from "./user.state";
import { UserActionTypes } from "./user.types";

export const getUserListReducer: Reducer<UserState, UserActions> = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UserActionTypes.CHANGE_USERS:
      return { ...state, users: action.payload as UserModel[] };
    default:
      return state;
  }
};
