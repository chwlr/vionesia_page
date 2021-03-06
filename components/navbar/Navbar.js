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
        <Navbar.Toggle onClick={handleClick}>{click ? <FaTimes color="#FFF"/> : <FaBars color="#FFF"/>}</Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex text-center align-items-center justify-content-between">
            <Link href="/"><span className="my-2">Home</span></Link>
            <Link href="/about" id="about_us"><span className="my-2">About us</span></Link>
            <Link href="/contact" id="contact"><span className="my-2">Contact</span></Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mx-auto text-center" id="navbar-social-media">
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