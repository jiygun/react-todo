import { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Container, Row, Col } from "reactstrap";
import { PostModel } from "../../core/models/post.model";
import { UserModel } from "../../core/models/user.model";
import { States } from "../../store";
import { getPostWithApi } from "../../store/post/post.actions";
import { getUserWithApi } from "../../store/user/user.actions";

interface Store {
  post: PostModel;
  user: UserModel;
  getPostWithApi: (id: number) => void;
  getUserWithApi: (id: number) => void;
}

const PostItemComponent: FunctionComponent<Store> = (store: Store) => {
  useEffect(() => {
    if (!store.post || !store.post.id)
      store.getPostWithApi((store as any).match.params.id);
    if (store.post && store.post.userId)
      store.getUserWithApi(store.post.userId);
  }, []);

  return (
    <Container>
      {!store.user || !store.post ? (
        <Row>
          <h5 className="h5 text-danger">Not Found...</h5>
        </Row>
      ) : (
        <Row className="flex-row">
          <Col className="col-6">
            <h2 className="h2 text-success">{store.post.title}</h2>
            <p>{store.post.body}</p>
          </Col>
          <Col className="col-6">
            <h2 className="h2 text-primary">{store.user.name}</h2>
            <p>{store.user.email}</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

function checkPostExitsInStore(
  state: States,
  ownProps: RouteComponentProps<{ id: string }>
): PostModel | undefined {
  if (state.getPostListReducer.posts.length)
    return state.getPostListReducer.posts.find(
      (post) => post.id === parseInt(ownProps.match.params.id)
    );
  else return state.postReducer.post;
}

function checkUserExitsInStore(
  state: States,
  postModel: PostModel | undefined
): UserModel | undefined {
  if (!postModel) return undefined;
  if (state.getUserListReducer.users.length)
    return state.getUserListReducer.users.find(
      (user) => user.id === postModel?.userId
    );
  else return state.userReducer.user;
}

const mapStateToProps = (
  state: States,
  ownProps: RouteComponentProps<{ id: string }>
) => {
  return {
    post: checkPostExitsInStore(state, ownProps),
    user: checkUserExitsInStore(state, checkPostExitsInStore(state, ownProps)),
  };
};

const mapDispatchToProps = {
  getPostWithApi,
  getUserWithApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItemComponent as any);
