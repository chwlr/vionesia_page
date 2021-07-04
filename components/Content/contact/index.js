import React from 'react'
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import { Container_styled, IcStyled, Card_styled, Button_styled } from './style'


export default function ContactContent () {
  return (
      <>
      <Container_styled fluid>
        <Row style={{height: '100%', padding: '0 5vw 0 5vw', margin: '0 0 0 0' }}>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center" style={{ fontWeight: 'bold', textShadow: '2px 2px 2px #155BDA', color: 'white' }}>Let’s Collaborate With Us</h1>
          </Col>
        </Row>
      </Container_styled>
      <Container className="my-5">
       <Row>
         <Col xs={12} md={{ offset: 1 }}>
         <h3 style={{ fontWeight: 'bold' }} className="text-start mx-4">Get In Touch</h3>
          <Card_styled className="my-2">
            <Card.Body className="d-flex flex-row align-items-center">
              <IcStyled src="/ic-phone.svg" />
              <div className="d-flex flex-column align-items-start">
                <span>Phone Number</span>
                <h5 style={{ fontWeight: 'bold' }}>081381916256</h5>
              </div>
            </Card.Body>
          </Card_styled>
          <Card_styled className="my-2">
            <Card.Body className="d-flex flex-row align-items-center">
              <IcStyled src="/ic-mail.svg" />
              <div className="d-flex flex-column align-items-start">
                <span>Mail</span>
                <h5 style={{ fontWeight: 'bold' }}>sales@vionesia.com</h5>
              </div>
            </Card.Body>
          </Card_styled>
          <Card_styled className="my-2">
            <Card.Body className="d-flex flex-row align-items-center">
              <IcStyled src="/ic-map.svg" />
              <div className="d-flex flex-column align-items-start">
                <span>Location</span>
                <h5 style={{ fontWeight: 'bold' }}>Revenue Tower Building, 25th Floor Sudirman Central Business District</h5>
              </div>
            </Card.Body>
          </Card_styled>
         </Col>
         <Col xs={12} md={6}>
            <Card_styled>
              <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label className="my-3">Full Name</Form.Label>
                  <Form.Control  size="sm" type="text" placeholder="Full Name" id="form_name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="my-3">Email Address</Form.Label>
                  <Form.Control  size="sm" type="email" placeholder="Email Address" id="form_email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="my-3">Messages</Form.Label>
                  <Form.Control style={{  height: '250px' }} size="lg" as="textarea" type="text" placeholder="Messages" id="form_message"/>
                </Form.Group>
                <Button_styled>Submit</Button_styled>
              </Form>
              </Card.Body>
            </Card_styled>
         </Col>
       </Row>
       <Row>
         <Col className="my-5">
          <img src="/image_map.png" style={{ width: '100%', height: 'auto' }} />
         </Col>
       </Row>
      </Container>
      </>
  )
}
