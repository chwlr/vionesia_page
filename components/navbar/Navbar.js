import React, {useState} from 'react'
import {  Navbar, Nav } from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IcStyled, NavStyle, Ncntsty, BrandStyled } from './style'

export default function Navcomponent () {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <NavStyle>
    <Ncntsty fluid>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="/"><BrandStyled src="/logo_text.png" alt="brand-vionesia"  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}>{click ? <FaTimes color="#FFF"/> : <FaBars color="#FFF"/>}</Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className=" mx-auto text-center">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/solutions">SOLUTIONS</Nav.Link>
            <Nav.Link href="/about">ABOUT US</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        <Nav className=" mx-auto text-center">
            <IcStyled src="/ic-facebook.svg" />
            <IcStyled src="/ic-instagram.svg" />
            <IcStyled src="/ic-linkedin.svg" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Ncntsty>
    </NavStyle>
  )
}