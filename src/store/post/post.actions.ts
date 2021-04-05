import { Dispatch } from "react";
import { Action } from "redux";
import { PostModel } from "../../core/models/post.model";
import { PostActionTpyes } from "./post.types";

export interface PostActions extends Action {
  type: PostActionTpyes;
  payload: PostModel | PostModel[];
}

export const changePosts = (posts: PostModel[]): PostActions => ({
  type: PostActionTpyes.CHANGE_POSTS,
  payload: posts,
});

export const changePost = (post: PostModel): PostActions => ({
  type: PostActionTpyes.CHANGE_POST,
  payload: post,
});

export const getPostListWithApi = () => {
  return async (dispatch: Dispatch<PostActions>) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res: Response) => {
        return res.json();
      })
      .then((res: PostModel[]) => {
        return dispatch(changePosts(res));
      });
  };
};

export const getPostWithApi = (id: number) => {
  return async (dispatch: Dispatch<PostActions>) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res: Response) => {
        return res.json();
      })
      .then((res: PostModel) => {
        return dispatch(changePost(res));
      });
  };
};
