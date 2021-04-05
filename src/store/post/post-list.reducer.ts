import { Reducer } from "react";
import { PostModel } from "../../core/models/post.model";
import { PostActions } from "./post.actions";
import { initialState, PostState } from "./post.state";
import { PostActionTpyes } from "./post.types";

export const getPostListReducer: Reducer<PostState, PostActions> = (
  state: PostState = initialState,
  action: PostActions
): PostState => {
  switch (action.type) {
    case PostActionTpyes.CHANGE_POSTS:
      return { ...state, posts: action.payload as PostModel[] };
    default:
      return state;
  }
};
