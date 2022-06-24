import React from "react";
import logoImg from "../logo.png"
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container>
        <Navbar.Brand href="/#">
        <img
          alt=""
          src={logoImg}
          width="30px"
          height="30px"
          className="d-inline-block align-top"
        />{' '}
      
      <strong>StoryHouse</strong>
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Best Sellers</Nav.Link>
              <Nav.Link href="#link">New Releases</Nav.Link>
              <NavDropdown title="Genre" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Fiction</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Non Fiction
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
            <Form className="d-flex navbar-form navbar-left">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </div>
  );
}
