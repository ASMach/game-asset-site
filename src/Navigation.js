import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import logo from "./Images/huskerbeach-192.png";

export default function Navigation() {
  return (
    <navbar>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="96"
            width="96"
            className="d-inline-block align-top"
            alt="HuskerBeach logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Middleware" id="basic-nav-dropdown">
              <NavDropdown.Item href="middleware">Unity</NavDropdown.Item>
              <NavDropdown.Item href="/middleware">Unreal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </navbar>
  );
}
