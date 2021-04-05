import { FunctionComponent } from "react";
import { Row, Table } from "reactstrap";
import { UserModel } from "../../core/models/user.model";

interface UserProps {
  userList: UserModel[];
}

const UserListComponent: FunctionComponent<UserProps> = (props: UserProps) => {
  return (
    <Row className="flex-row">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>User Name</th>
            <th>E-Mail</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {props.userList.map((user, index) => (
            <tr>
              <th scope="row">{index}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>{user.company?.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Row>
  );
};

export default UserListComponent;
