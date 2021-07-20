import React, {useState} from 'react'
import {  Navbar, Nav } from 'react-bootstrap'
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
          <Nav className=" mx-auto text-center">
            <Link href="/"><Nav.Link href="/">Home</Nav.Link></Link>
            <Link href="/"><Nav.Link href="/solutions">Solutions</Nav.Link></Link>
            <Link href="/about"><Nav.Link href="/about">About Us</Nav.Link></Link>
            <Link href="/contact"><Nav.Link href="/contact">Contact</Nav.Link></Link>
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