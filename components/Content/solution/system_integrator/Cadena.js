import React from 'react'
import {Row, Col, Card, Container} from 'react-bootstrap'
import { Card_styled } from '../style'

export default function Cadena () {
  return (
    <Container id="cadena" className="my-5 transform-right-left" >
      <Row>
        <Col className="justify-content-center align-items-center">
            <h4 className="bold text-center py-5" style={{ color: 'black' }}>Cadena HRM</h4>
        </Col>
      </Row>
      <Row>
          <Col xs="12" md={{ span: 6, offset: 3 }}>
              <Card_styled>
                  <Card.Body>
                      <p className="p-lead">Cadena HRM Series</p>
                      <p className="p-regular">Cadena, we have always put our people first. For over 14 years, it has driven us to create the innovative HRM solution we offer today: Series |5. Incubated in the US, we offer a solution that is compliant to local tax/labor laws across the entire South-East Asia region. In every country where we operate, we guarantee necessary expertise through a network of local knowledgeable partners or our own offices.</p>
                  </Card.Body>
              </Card_styled>
          </Col>
      </Row>
    </Container>
  )
}