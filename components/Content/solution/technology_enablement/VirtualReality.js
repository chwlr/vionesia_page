import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Card_styled } from '../style'

export default function VirtualReality () {
  return (
    <Row id="oracle" className="my-5">
            <Row>
              <Col>
                <h4 className="bold text-center py-5" style={{ color: 'black' }}>Virtual Reality Solutions</h4>
              </Col>
            </Row>
            <Col xs="12" lg={{span: 6, offset: 3}}>
              <Card_styled>
                <Card.Body>
                  <p className="p-lead">Virtual Reality</p>
                  <p className="p-regular">Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings. This environment is perceived through a device known as a Virtual Reality headset or helmet.</p>
                </Card.Body>
              </Card_styled>
            </Col>
            
          </Row>
  )
}