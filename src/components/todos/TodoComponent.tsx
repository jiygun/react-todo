import { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { TodoModel } from "../../core/models/todo.model";
import { States } from "../../store";
import PaginationComponent from "../pagination/Pagination";
import { getTodoListWithApi } from "../../store/todo/todo.actions";
import TodoListComponent from "./TodoListComponent";
import TodoNavComponent from "./TodoNavComponent";

interface TodoStore {
  todos: TodoModel[];
  page: number;
  status: boolean;
  getTodoListWithApi: () => void;
}

const TodoComponent: FunctionComponent<TodoStore> = (store: TodoStore) => {
  useEffect(() => {
    store.getTodoListWithApi();
  }, []);

  function getTodoListWithPage(): TodoModel[] {
    if (store.status === null || store.status === undefined)
      return store.todos.slice((store.page - 1) * 18, store.page * 18);
    return store.todos
      .slice((store.page - 1) * 18, store.page * 18)
      .filter((t) => t.completed === store.status);
  }

  function getListLength() {
    if (store.status === null || store.status === undefined)
      return Array.from(Array(Math.ceil(store.todos.length / 18)).keys());
    return Array.from(
      Array(
        Math.ceil(
          store.todos.filter((t) => t.completed === store.status).length / 18
        )
      ).keys()
    );
  }

  return (
    <Container>
      <h1 className="h1 text-warning my-4 text-center">Todos</h1>
      <TodoNavComponent />
      <TodoListComponent todoList={getTodoListWithPage()} />
      <PaginationComponent pageList={getListLength()} />
    </Container>
  );
};

const mapStateToProps = (state: States) => ({
  todos: state.getTodoListReducer.todos,
  page: state.paginationReducer.page,
  status: state.todoReducer.status,
});

const mapDispatchToProps = {
  getTodoListWithApi,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent as any);
