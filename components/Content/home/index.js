import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Container_styled, IcStyled, Button_styled, Card_styled, Discover_styled, Col_discover, Dicover_card, Expertise_styled  } from './style'

export default function HomeContent () {
  return (
             <>
               <Container_styled fluid>
                <Row id="home_section"  style={{height: '100%', padding: '0 15vw 0 0', margin: '0 0 0 0' }}>
                  <Col className="d-flex flex-column justify-content-center align-items-end">
                  <h1 className="text-center" style={{ fontWeight: 'bold', textShadow: '2px 2px 2px #155BDA', color: 'white' }}>We Understand Your <br></br> Business Demand</h1>
                  <Row>
                    <Col>
                      <Button_styled className="mx-2"><a href="/contact"> Contact</a> </Button_styled>
                      <Button_styled><a href="/solutions"> Solutions</a></Button_styled>
                    </Col>
                  </Row>
                  </Col>
                </Row>
              </Container_styled>
              <Container className="py-5">
                <Row>
                  <Col>
                  <h2 className="text-center" style={{ fontWeight: '300', color: '#2E2E2E', textShadow: '1px 1px 3px #D1EDFF' }}>Discover What You Can Get</h2>
                  </Col>
                </Row>
                <Discover_styled>
                  <Row>
                    <Col_discover md={{ span: 4, offset: 1 }}>
                      <Dicover_card>
                        <Card.Body>Best in Class Technology Principal in the World</Card.Body>
                      </Dicover_card>
                    </Col_discover>
                  </Row>
                  <Row>
                    <Col_discover md={{ span: 4, offset: 8 }}>
                      <Dicover_card>
                        <Card.Body>IT Professionals To Help</Card.Body>
                      </Dicover_card>
                    </Col_discover>
                  </Row>
                  <Row>
                    <Col_discover md={{ span: 4, offset: 1 }}>
                      <Dicover_card>
                        <Card.Body>Consulting Practices Since Early 2000.</Card.Body>
                      </Dicover_card>
                    </Col_discover>
                  </Row>
                </Discover_styled>
              </Container>
              <Container style={{ marginBottom: '2em' }}>
                <Row  style={{ padding: '1em 0 0 0', margin: '0 0 0 0' }}>
                  <Col className="d-flex flex-column justify-content-start align-items-center">
                  <h2 className="text-center" style={{ padding: '0 0 0 0', fontWeight: '300', color: '#2E2E2E', textShadow: '1px 1px 3px #D1EDFF' }}>Our Best Expertise</h2>
                  </Col>
                </Row>
                <Expertise_styled>
                <Row style={{ padding: '1em 0 0 0', margin: '0 0 0 0' }}>
                    <Col md={{ span: 4, offset: 2 }} className="d-flex flex-column justify-content-start align-items-start">
                        <Card_styled>Digital Marketing</Card_styled>
                        <Card_styled>Cloud Solution {'&'} Deployment</Card_styled>
                        <Card_styled>ERP, CRM, HR Cloud Solution</Card_styled>
                        <Card_styled>Technology Platform Integration</Card_styled>
                        <Card_styled>Financial Planning {'&'} Budgeting</Card_styled>
                        <Card_styled>Business Enabler for Startup</Card_styled>
                        <Card_styled>Professional Services</Card_styled>
                        <Card_styled>Tactical Equipment</Card_styled>
                    </Col>
                  </Row>
                </Expertise_styled>
              </Container>
              {/* <Container style={{ marginBottom: '1.5em' }}>
                <Row style={{ padding: '3em 0 1em 0', margin: '0 0 0 0' }}>
                  <Col className="d-flex flex-column justify-content-start align-items-center">
                  <h2 className="text-center" style={{ padding: '0 0 0 0', fontWeight: '300', color: '#2E2E2E', textShadow: '1px 1px 3px #D1EDFF' }}>Our Recent Portfolio</h2>
                  </Col>
                </Row>
                <Row>
                
                </Row>
              </Container> */}
             </>
  )
}
