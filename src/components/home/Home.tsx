import { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { States } from "../../store";
import { PostListComponent } from "../posts/PostListComponent";
import { getPostListWithApi } from "../../store/post/post.actions";
import { PostModel } from "../../core/models/post.model";

interface HomeStore {
  posts: PostModel[];
  getPostListWithApi: Function;
}

const HomeComponent: FunctionComponent<HomeStore> = (store: HomeStore) => {
  useEffect(() => {
    store.getPostListWithApi();
  }, []);

  function postList() {
    return store.posts.slice(0, 9);
  }
  return (
    <Container>
      <PostListComponent postList={postList()} />
    </Container>
  );
};

const mapStateToProps = (state: States) => ({
  posts: state.getPostListReducer.posts,
});

const mapDispatchToProps = {
  getPostListWithApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent as any);
