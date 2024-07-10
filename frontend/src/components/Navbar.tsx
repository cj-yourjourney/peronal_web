// src/components/NavBar.tsx
import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" variant="light" className="justify-content-center">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className="mx-3">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/resume" className="mx-3">
            Resume
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="mx-3">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="mx-3">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
