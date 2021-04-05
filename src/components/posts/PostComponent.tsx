import { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { States } from "../../store";
import PaginationComponent from "../pagination/Pagination";
import { getPostListWithApi } from "../../store/post/post.actions";
import { PostModel } from "../../core/models/post.model";
import { PostListComponent } from "./PostListComponent";

interface PostStore {
  posts: PostModel[];
  page: number;
  getPostListWithApi: Function;
}

interface Props {
  posts: PostModel[];
}

const PostComponent: FunctionComponent<PostStore> = (
  store: PostStore,
  props: Props
) => {
  useEffect(() => {
    store.getPostListWithApi();
  }, []);

  function getPostListWithPage(): PostModel[] {
    return store.posts.slice((store.page - 1) * 18, store.page * 18);
  }

  function getListLength(): number[] {
    return Array.from(Array(Math.ceil(store.posts.length / 18)).keys());
  }

  return (
    <Container>
      <h1 className="h1 text-warning my-4 text-center">Posts</h1>
      <PostListComponent postList={getPostListWithPage()} />
      <PaginationComponent pageList={getListLength()} />
    </Container>
  );
};

const mapStateToProps = (state: States) => ({
  posts: state.getPostListReducer.posts,
  page: state.paginationReducer.page,
});

const mapDispatchToProps = {
  getPostListWithApi,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComponent as any);
