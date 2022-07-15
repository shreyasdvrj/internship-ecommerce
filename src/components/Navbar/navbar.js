import React from "react";
import logoImg from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import axios from "axios";

export default function Navigation() {
const history = useHistory();
  const logout = () =>{
    console.log("Logging out")
    axios({
      method: "GET",
      url: "http://localhost:5000/users/logout",
      withCredentials: true,
    })
    .then((res) => {
      toast("Logged Out");
      history.push("/")
      window.location.reload();
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
  }
  var token = Cookies.get("jwt");
  return (
    <div>
      <ToastContainer />
      <Navbar bg="white" expand="lg" className="py-0">
        <Container className="ml-3">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logoImg}
              width="30px"
              height="30px"
              className="d-inline-block align-top"
            />{" "}
            <strong>StoryHouse</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/best">Best Sellers</Nav.Link>
              <Nav.Link href="/new">New Releases</Nav.Link>
              <NavDropdown title="Genre" id="basic-nav-dropdown">
                <NavDropdown.Item href="/exploreFiction">
                  Fiction
                </NavDropdown.Item>
                <NavDropdown.Item href="/exploreNonFiction">
                  Non Fiction
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex navbar-form navbar-left mx-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 my-2 py-0"
                aria-label="Search"
              />
              <Button bsClass="custom-btn" variant="outline-dark" size="sm">
                Search
              </Button>
            </Form>
            <Nav className="mx-3">
              <Nav.Link href="/cart">Cart</Nav.Link>
              {token ? (
                <>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
