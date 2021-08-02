import React, {useState} from 'react'
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IcStyled, NavStyle, Ncntsty, BrandStyled } from './style'
import Link from 'next/link'

export default function Navcomponent () {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)


  return (
    <NavStyle>
    <Ncntsty fluid>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Link href="/"><Navbar.Brand href="/"><BrandStyled src="/logo_text.png" alt="brand-vionesia"  /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}>{click ? <FaTimes color="#FFF"/> : <FaBars color="#FFF"/>}</Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="mx-auto d-flex text-center align-items-center">
            <Link href="/" >Home</Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        <Nav className=" mx-auto text-center">
        <Link href="/"><IcStyled src="/ic-facebook.svg" /></Link>
        <Link href="/"><IcStyled src="/ic-instagram.svg" /></Link>
        <Link href="/"><IcStyled src="/ic-linkedin.svg" /></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </Ncntsty>
    </NavStyle>
  )
}