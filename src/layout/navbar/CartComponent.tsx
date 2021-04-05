import { FunctionComponent } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import { TodoModel } from "../../core/models/todo.model";
import { States } from "../../store";
import { deleteTodo } from "../../store/todo-basket/todo-basket.actions";

interface Store {
  todos?: TodoModel[];
  deleteTodo?: (todo: TodoModel) => void;
}

const CartComponent: FunctionComponent<Store> = (store: Store) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle className="text-white" nav caret>
        My Todo List
      </DropdownToggle>
      <DropdownMenu right>
        {store.todos?.map((todo) => (
          <DropdownItem key={todo.id}>
            <Badge
              color="danger"
              onClick={() => (store.deleteTodo ? store.deleteTodo(todo) : null)}
            >
              -
            </Badge>
            {todo.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

const mapStateToProps = (state: States) => ({
  todos: state.todoBasketReducer.todos,
});

const mapDispatchToProps = {
  deleteTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent as FunctionComponent<Store>);
