import logo from './Images/huskerbeach-192.png';
import './App.css';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <div className="App">

<Navbar bg="dark" variant="dark">
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Middleware" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Unity</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Unreal</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Games</Nav.Link>
      <Nav.Link href="#home">Support</Nav.Link>
      <Nav.Link href="#home">About</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        height="96"
        width="96"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand> 
  </Navbar>
      <div>
      Put a router here for further info
      </div>
    </div>
  );
}

export default App;
