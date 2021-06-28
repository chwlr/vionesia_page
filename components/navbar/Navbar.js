import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Navcomponent () {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="/"><img src="/vionesia_brand.png" alt="brand-vionesia" style={{ width: "50px", height: "auto" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link className="mx-2" href="/">HOME</Nav.Link>
            <Nav.Link className="mx-2" href="/products">PRODUCT</Nav.Link>
            <Nav.Link className="mx-2" href="#">NEWS</Nav.Link>
            <Nav.Link className="mx-2" href="/about">ABOUT</Nav.Link>
            <Nav.Link className="mx-2" href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}