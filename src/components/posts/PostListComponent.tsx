import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  CardFooter,
} from "reactstrap";
import { PostModel } from "../../core/models/post.model";

export interface PostStore {
  postList: PostModel[];
}

export const PostListComponent: FunctionComponent<PostStore> = (
  postStore: PostStore
) => {
  return (
    <Container>
      <Row className="flex-row">
        {postStore.postList.map((post) => (
          <Col className="col-12 col-md-6 col-lg-4 d-flex" key={post.id}>
            <Card className="my-4">
              <CardImg
                top
                width="100%"
                src="https://via.placeholder.com/250x150"
                alt=""
              />
              <CardBody>
                <CardTitle tag="h5">{post.title}</CardTitle>
                <CardText>{post.body}</CardText>
              </CardBody>
              <CardFooter className="d-flex justify-content-center">
                <Link
                  className="btn btn-block btn-primary"
                  to={"/posts/" + post.id}
                >
                  Go To Post
                </Link>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
