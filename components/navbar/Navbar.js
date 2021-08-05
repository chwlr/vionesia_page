import React, {useState} from 'react'
import {  Navbar, Nav } from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IcStyled, NavStyle, Ncntsty, BrandStyled } from './style'
import Link from 'next/link'
import Dropdown from './Dropdown'

export default function Navcomponent () {
  const [click, setClick] = useState(false)
  const [drop, setDrop] = useState(false)
  const handleClick = () => setClick(!click)
  const handleDrop = () => setDrop(!drop)


  return (
    <NavStyle>
    <Ncntsty fluid>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Link href="/"><Navbar.Brand href="/"><BrandStyled src="/logo_text.png" alt="brand-vionesia"  /></Navbar.Brand></Link>
        <Navbar.Toggle onClick={handleClick}>{click ? <FaTimes color="#FFF"/> : <FaBars color="#FFF"/>}</Navbar.Toggle>
        <Navbar>
          <Nav className="mx-auto d-flex text-center align-items-center">
            <Link href="/" >Home</Link>
            <span href="/" onClick={handleDrop}>Solution</span>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </Nav>
        </Navbar>
        <Navbar className="justify-content-end">
          <Nav className=" mx-auto text-center">
            <Link href="/"><IcStyled src="/ic-facebook.svg" /></Link>
            <Link href="/"><IcStyled src="/ic-instagram.svg" /></Link>
            <Link href="/"><IcStyled src="/ic-linkedin.svg" /></Link>
          </Nav>
        </Navbar>
      </Navbar>
      {drop ? <Dropdown /> : null}
    </Ncntsty>
    </NavStyle>
  )
}