import React, {useState} from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navcomponent () {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <Container style={{ position: 'absolute', background: 'white', zIndex: '1', top: '20px', left: '0', right: '0', borderRadius: '15px' }}>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="/"><img src="/vionesia_brand.png" alt="brand-vionesia" style={{marginLeft: '15px', width: "50px", height: "auto" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}>{click ? <FaTimes color="#155BDA"/> : <FaBars color="#155BDA"/>}</Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link style={{ color: '#155BDA' }} className="mx-2" href="/">HOME</Nav.Link>
            <Nav.Link style={{ color: '#155BDA' }} className="mx-2" href="/solutions">SOLUTIONS</Nav.Link>
            {/* <Nav.Link style={{ color: '#155BDA' }} className="mx-2" href="/clients">OUR CLIENTS</Nav.Link> */}
            <Nav.Link style={{ color: '#155BDA' }} className="mx-2" href="/about">ABOUT US</Nav.Link>
            <Nav.Link style={{ color: '#155BDA' }} className="mx-2" href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}