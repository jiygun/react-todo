import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Row } from "reactstrap";

export const FooterComponent: FunctionComponent = () => {
  return (
    <footer className="bg-dark">
      <Container className="d-flex flex-row">
        <Row className="col-6">
          <h1 className="h1 text-white">Todo</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit velit mollitia praesentium eaque autem consectetur
            placeat dignissimos? Exercitationem impedit itaque facilis alias qui
            ad labore quos! Similique possimus quas labore?F
          </p>
        </Row>
        <Row className="col-6 justify-content-center">
          <ListGroup type="unstyled">
            <ListGroupItem className="border-0 bg-dark text-white">
              <Link className="text-white nav-link" to="/users">
                Users
              </Link>
            </ListGroupItem>
            <ListGroupItem className="border-0 bg-dark text-white">
              <Link className="text-white nav-link" to="/todos">
                Todos
              </Link>
            </ListGroupItem>
            <ListGroupItem className="border-0 bg-dark text-white">
              <Link className="text-white nav-link" to="/users">
                Users
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Row>
      </Container>
    </footer>
  );
};
