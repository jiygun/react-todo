import { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { States } from "../../store";
import PaginationComponent from "../pagination/Pagination";
import { UserModel } from "../../core/models/user.model";
import { getUserListWithApi } from "../../store/user/user.actions";
import UserListComponent from "./UserListComponent";

interface UserStore {
  users: UserModel[];
  page: number;
  getUserListWithApi: () => void;
}

const UserComponent: FunctionComponent<UserStore> = (store: UserStore) => {
  useEffect(() => {
    store.getUserListWithApi();
  }, []);

  function getUserListWithPage(): UserModel[] {
    return store.users.slice((store.page - 1) * 18, store.page * 18);
  }

  function getListLength() {
    return Array.from(Array(Math.ceil(store.users.length / 18)).keys());
  }

  return (
    <Container>
      <h1 className="h1 text-warning my-4 text-center">Users</h1>
      <UserListComponent userList={getUserListWithPage()} />
      <PaginationComponent pageList={getListLength()} />
    </Container>
  );
};

const mapStateToProps = (state: States) => ({
  users: state.getUserListReducer.users,
  page: state.paginationReducer.page,
});

const mapDispatchToProps = {
  getUserListWithApi,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent as any);
