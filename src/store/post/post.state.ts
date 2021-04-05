import { PostModel } from "../../core/models/post.model";

export interface PostState {
  post: PostModel;
  posts: PostModel[];
}

export let initialState: PostState = {
  post: {},
  posts: [],
};
