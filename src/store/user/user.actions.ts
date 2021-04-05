import { Dispatch } from "react";
import { Action } from "redux";
import { UserModel } from "../../core/models/user.model";
import { UserActionTypes } from "./user.types";

export interface UserActions extends Action {
  type: UserActionTypes;
  payload: UserModel | UserModel[];
}

export const changeUser = (user: UserModel): UserActions => ({
  type: UserActionTypes.CHANGE_USER,
  payload: user,
});

export const changeUsers = (users: UserModel[]): UserActions => ({
  type: UserActionTypes.CHANGE_USERS,
  payload: users,
});

export const getUserListWithApi = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res: Response) => {
        return res.json();
      })
      .then((res: UserModel[]) => {
        return dispatch(changeUsers(res));
      });
  };
};

export const getUserWithApi = (id: number) => {
  return async (dispatch: Dispatch<UserActions>) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res: Response) => {
        return res.json();
      })
      .then((res: UserModel) => {
        return dispatch(changeUser(res));
      });
  };
};
