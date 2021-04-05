import { UserModel } from "../../core/models/user.model";

export interface UserState {
  user: UserModel;
  users: UserModel[];
}

export let initialState: UserState = {
  user: {},
  users: [],
};
