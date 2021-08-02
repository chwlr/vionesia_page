import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Card_styled } from '../style'
import Image from 'next/image'

export default function Visionlabs () {
  return (
    <Row id="oracle" className="my-5 transform-right-left">
            <Row>
              <Col>
                <h4 className="bold text-center py-5" style={{ color: 'black' }}>VisionLabs Solutions</h4>
              </Col>
            </Row>
            <Col xs="12" md="6" lg="6">
              <Card_styled>
                <Card.Body>
                  <p className="p-lead">Luna SDK</p>
                  <p className="p-regular text-left py-2">LUNA SDK is a pure face recognition engine that enables efficient and accurate processing of faces in images and live video stream and can run on a wide range of devices <br></br> LUNA SDK supports multiple platforms and comes in two editions: the front-end edition and the complete edition. </p>
                </Card.Body>
              </Card_styled>
            </Col>
            <Col xs="12" md="6" lg="6">
              <Card_styled>
                <Card.Body>
                <p className="p-lead">Luna Platform</p>
                  <p className="p-regular text-left py-2">LUNA PLATFORM is a biometric data management system that offers great flexibility to create scenarios of varying complexity for integrated face recognition </p>
                </Card.Body>
              </Card_styled>
            </Col>
            
          </Row>
  )
}