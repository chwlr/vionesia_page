import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import { Card_styled } from '../style'

export default function Webapp () {
  return (
      <Container id="oracle" className="my-5">
          <Row>
              <Col className="justify-content-center align-items-center">
                  <h4 className="bold text-center py-5" style={{ color: 'black' }}>WebApps Integrations Solutions</h4>
              </Col>
          </Row>
          <Row>
              <Col xs="12" lg={{span: 6, offset: 3}}>
                  <Card_styled>
                      <Card.Body>
                          <p className="p-lead">WebApp Integration</p>
                          <p className="p-regular">Application integration helps maintain, manage, and keep all your applications up to date while alleviating data duplication and redundancy. By creating an application integration network that allows applications to communicate with each other, business and work processes can be done more effectively and efficiently. Enterprise application integration (EAI) is used to describe application integration at the enterprise level where multiple applications are interconnected. Whether on the enterprise level or not, application integration can mitigate challenges related to data silos.</p>
                      </Card.Body>
                  </Card_styled>
              </Col>
          </Row>
      </Container>
  )
}