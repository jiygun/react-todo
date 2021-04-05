import { FunctionComponent } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
  CardFooter,
} from "reactstrap";
import { PostModel } from "../../core/models/post.model";
import { TodoModel } from "../../core/models/todo.model";

interface TodoStore {
  postList: PostModel[];
}

interface Props {
  todoList: TodoModel[];
}

export const UserItemComponent: FunctionComponent<TodoStore> = (
  postStore: TodoStore,
  props: Props
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
                <Button className="btn-block">Button</Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
