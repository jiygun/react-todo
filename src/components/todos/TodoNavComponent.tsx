import { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Row, Nav, NavItem, NavLink } from "reactstrap";
import { changeTodoStatus } from "../../store/todo/todo.actions";

interface TodoNavStore {
  changeTodoStatus?: Function;
}

const TodoNavComponent: FunctionComponent<TodoNavStore> = (
  store: TodoNavStore
) => {
  function changeTodoStatus(status: boolean) {
    if (store.changeTodoStatus) store.changeTodoStatus(status);
  }

  return (
    <Row className="mb-3 flex-row">
      <Nav pills>
        <NavItem className="mx-3">
          <NavLink
            className="btn btn-success"
            href="#"
            onClick={() => changeTodoStatus(true)}
          >
            Completed
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="btn btn-danger"
            href="#"
            onClick={() => changeTodoStatus(false)}
          >
            Continuing
          </NavLink>
        </NavItem>
      </Nav>
    </Row>
  );
};

const mapDispatchToProps = {
  changeTodoStatus,
};

export default connect(
  null,
  mapDispatchToProps
)(TodoNavComponent as FunctionComponent<TodoNavStore>);
