import React from 'react'
import {Row, Col, Card, Container} from 'react-bootstrap'
import { Card_styled } from '../style'

export default function IoT () {
  return (
      <Container id="oracle" className="my-5">
          <Row>
              <Col className="ustify-content-center align-items-center">
                  <h4 className="bold text-center py-5" style={{ color: 'black' }}>Internet of Things Solutions</h4>
              </Col>
          </Row>
          <Row>
              <Col xs="12" lg={{span: 6, offset: 3}}>
                  <Card_styled>
                      <Card.Body>
                          <p className="p-lead">Internet of Things</p>
                          <p className="p-regular">The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.</p>
                      </Card.Body>
                  </Card_styled>
              </Col>
          </Row>
      </Container>
  )
}