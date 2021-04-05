import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { PostState } from "./post/post.state";
import { getPostListReducer, postReducer } from "./post/post.store";
import { TodoState } from "./todo/todo.state";
import { todoReducer, getTodoListReducer } from "./todo/todo.store";
import { paginationReducer } from "./pagination/pagination.store";
import { PaginationState } from "./pagination/pagination.state";
import { userReducer, getUserListReducer } from "./user/user.store";
import { UserState } from "./user/user.state";
import { TodoBasketState } from "./todo-basket/todo-basket.state";
import { todoBasketReducer } from "./todo-basket/todo-basket.reducer";

const reducer = combineReducers({
  postReducer,
  getPostListReducer,
  todoReducer,
  getTodoListReducer,
  paginationReducer,
  userReducer,
  getUserListReducer,
  todoBasketReducer,
});

export interface States {
  postReducer: PostState;
  getPostListReducer: PostState;
  todoReducer: TodoState;
  getTodoListReducer: TodoState;
  paginationReducer: PaginationState;
  userReducer: UserState;
  getUserListReducer: UserState;
  todoBasketReducer: TodoBasketState;
}

const configureStore = (initialState?: States) =>
  createStore(reducer, applyMiddleware(thunk));

const store = configureStore();

export default store;
