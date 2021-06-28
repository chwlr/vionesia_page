import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Stext } from './style'
 
export default function Footer() {
  return (
    <footer>
      <Container className="mr-auto ml-auto text-center">
        <Row>
          <Col><img src="/vionesia_text.png" alt="vionesia" style={{ width: "80px", height: "auto" }} /></Col>
        </Row>
        <Row className="my-3">
          <Col>
            <img src="/ic-instagram.svg" alt="vionesia" className="p-2"/>
            <img src="/ic-twitter.svg" alt="vionesia" className="p-2"/>
            <img src="/ic-linkedin.svg" alt="vionesia"  className="p-2"/>
          </Col>
        </Row>
        <Row>
          <Col className="my-1"><Stext>© 2021 VIONESIA. All rights reserved.</Stext></Col>
        </Row>
      </Container>
    </footer>
  )
}