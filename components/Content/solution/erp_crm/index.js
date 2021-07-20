import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Button_styled, Card_styled } from './style'
import Link from 'next/link'
import Image from 'next/image'

export default function SolutionOne() {
  return (
    <Container fluid style={{ minHeight: '95vh' }}>
      <Row >
        <Col lg={4} style={{ background: '#343a40', maxHeight: '100%' }}>
          <Row>
            <Col className="pb-5 my-5 mx-4" style={{ color: 'white' }}>
              <h4 className="bold pb-3">System Integration</h4>
              <p className="p-lead mx-4">Oracle</p>
              <p className="p-lead mx-4">Acumatica</p>
              <p className="p-lead mx-4">Phicara</p>
              <p className="p-lead mx-4">Cadena</p>
              <Link href="/"><Button_styled className="my-3">back</Button_styled></Link>
              
            </Col>
          </Row>
        </Col>
        <Col lg={8} style={{background: '#adb5bd', minHeight: '95vh' }}>
          <Row id="system-integration" className="non-active" style={{ minHeight: '95vh' }}>
            <Col className="d-flex justify-content-center align-items-center py-3">
              <p className="p-lead text-center">Vionesia provides options of enterprise product to meet industry specific requirement & customer needs</p>
            </Col>
          </Row>
          <Row id="oracle" className="active">
            <Row>
              <Col><h4 className="semi-bold text-center py-5">Oracle Cloud Application</h4></Col>
            </Row>
            <Col xs="12" md="4" lg="4">
              <Card>
                <Card.Body>
                  <p className="p-lead">Fusion Application Suite</p>
                  <p className="p-regular">Oracle Fusion Cloud Applications is the world’s most complete cloud applications suite. Engineered to work together and with a modern user experience, Fusion Cloud Applications delivers continuous innovation via quarterly updates across every business function: finance, human resources, supply chain, manufacturing, sales, customer service, and marketing.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="4" lg="4">
              <Card>
                <Card.Body>
                  <p className="p-lead">NetSuite Application</p>
                  <p className="p-regular">NetSuite built the first unified suite of cloud applications that companies can use to run their entire business – all in one place. Organizations around the world use NetSuite to more easily grow and adapt to change.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="4" lg="4">
              <Card>
                <Card.Body>
                  <p className="p-lead">Industry-Specific Applications</p>
                  <p className="p-regular">We understand your industry is unlike any other. Only Oracle offers the deep industry domain expertise and hundreds of industry cloud solutions you need to meet your most complex operational, regulatory and customer challenges</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}