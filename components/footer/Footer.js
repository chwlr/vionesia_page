import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Stext, Button_styled, IcStyled } from './style'
 
export default function Footer() {
  return (
    <footer style={{  background: 'linear-gradient(to left, #6190e8, #a7bfe8)' }}>
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-start align-items-center">
          <h3 className="text-center mt-3" style={{ fontWeight: 'bold', textShadow: '2px 2px 2px #155BDA', color: 'white' }}>Start Your Digital Business With Us Today</h3>
          <Button_styled>Get Started</Button_styled>
          </Col>
        </Row>
        <Row>
        <h6 className="text-center mt-3" style={{ fontWeight: 'bold', textShadow: '2px 2px 2px #155BDA', color: 'white' }}>Our Social Media</h6>
        <Col className="d-flex flex-row justify-content-center align-items-center">
              <IcStyled src="/ic-facebook.svg" />
              <IcStyled src="/ic-instagram.svg" />
              <IcStyled src="/ic-twitter.svg" />
              <IcStyled src="/ic-linkedin.svg" />
          </Col>
        </Row>
        <Row>
          <Col style={{ color: 'white' }} className="text-center"><Stext>© 2021 VIONESIA. All rights reserved.</Stext></Col>
        </Row>
      </Container>
    </footer>
  )
}