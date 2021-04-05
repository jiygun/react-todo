import { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Row, Col, Alert, Button } from "reactstrap";
import { TodoModel } from "../../core/models/todo.model";
import { addTodo } from "../../store/todo-basket/todo-basket.actions";

interface TodoStore {
  todoList: TodoModel[];
  addTodo: (todo: TodoModel) => void;
}

const TodoListComponent: FunctionComponent<TodoStore> = (
  todoStore: TodoStore
) => {
  function addTodo(todo: TodoModel) {
    todoStore.addTodo(todo);
  }
  return (
    <Row className="flex-row">
      {todoStore.todoList.map((todo) => (
        <Col className="col-12 col-md-6 col-lg-4 d-flex" key={todo.id}>
          <Alert
            className="w-100 d-flex justify-content-between"
            color={todo.completed ? "success" : "danger"}
          >
            {todo.title}
            {!todo.completed ? (
              <Button className="btn btn-primary" onClick={() => addTodo(todo)}>
                Add List
              </Button>
            ) : (
              ""
            )}
          </Alert>
        </Col>
      ))}
    </Row>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(
  null,
  mapDispatchToProps
)(TodoListComponent as FunctionComponent<TodoStore>);
