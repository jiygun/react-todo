import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
  Container,
} from "reactstrap";
import CartComponent from "./CartComponent";

export const NavbarComponent: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" light expand="md">
      <Container>
        <Link className="text-white navbar-brand" to="/">
          React-Todo
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="text-white nav-link" to="/posts">
                Posts
              </Link>
            </NavItem>
            <NavItem>
              <Link className="text-white nav-link" to="/todos">
                Todos
              </Link>
            </NavItem>
            <NavItem>
              <Link className="text-white nav-link" to="/users">
                Users
              </Link>
            </NavItem>
            <CartComponent />
          </Nav>
          <NavbarText>J.G.</NavbarText>
        </Collapse>
      </Container>
    </Navbar>
  );
};
