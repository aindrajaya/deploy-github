import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link style={{color:'white'}} to="/">
            Home  
          </Link>
          <Link style={{color:'white'}} to="/about">
          About
          </Link>
          <Link style={{color:'white'}} to="/users">
            Users 
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
