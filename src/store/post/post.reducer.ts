import { Reducer } from "react";
import { PostModel } from "../../core/models/post.model";
import { PostActions } from "./post.actions";
import { initialState, PostState } from "./post.state";
import { PostActionTpyes } from "./post.types";

export const postReducer: Reducer<PostState, PostActions> = (
  state: PostState = initialState,
  action: PostActions
): PostState => {
  switch (action.type) {
    case PostActionTpyes.CHANGE_POST:
      return { ...state, post: action.payload as PostModel };
    default:
      return state;
  }
};
