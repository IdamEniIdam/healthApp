import React from 'react'
import { Nav, Navbar, NavDropdown , Form, Button } from "react-bootstrap";
import myImage from '../../images/avartar.jpg';
import Container from 'react-bootstrap/Container';
const Navigationbar = () => { 
    return (
<Navbar bg="light" expand="lg" fixed='top' collapseOnSelect >
<Container fluid>
  <Navbar.Brand href="#">Over View</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Form className="d-flex" style={{width: '50%',display: 'flex', marginLeft: '20%'}}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
                      <Nav >
            <NavDropdown 
            title={
            <img alt='profile' src={myImage}  width="30" style={{  borderRadius: '50px'}} />
          } 
            id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/4.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Settings</NavDropdown.Item>
              <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/4.3">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>

    );
}
 
export default Navigationbar;