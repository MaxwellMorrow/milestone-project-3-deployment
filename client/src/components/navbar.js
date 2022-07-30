import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();
  function redirectLogin() {
    navigate("/login");
  }
  function redirectIngrdients() {
    navigate("/ingredients");
  }
  function redirectRoot(){
    navigate("/");
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link onClick={redirectRoot}>Root</Nav.Link>
          <Nav.Link onClick={redirectLogin}>Login</Nav.Link>
          <Nav.Link onClick={redirectIngrdients}>Ingredients</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
