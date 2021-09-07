import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Card_styled } from '../style'

export default function Oracle () {
  return (
    <Container id="oracle" className="my-5 transform-right-left">
            <Row>
                <Col className="justify-content-center align-items-center">
                    <h4 className="bold text-center py-5" style={{ color: 'black' }}>Oracle Cloud Application</h4>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead">Fusion Application Suite</p>
                            <p className="p-regular">Oracle Fusion Cloud Applications is the world’s most complete cloud applications suite. Engineered to work together and with a modern user experience, Fusion Cloud Applications delivers continuous innovation via quarterly updates across every business function: finance, human resources, supply chain, manufacturing, sales, customer service, and marketing.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead">NetSuite Application</p>
                            <p className="p-regular">NetSuite built the first unified suite of cloud applications that companies can use to run their entire business – all in one place. Organizations around the world use NetSuite to more easily grow and adapt to change.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead">Industry-Specific Applications</p>
                            <p className="p-regular">We understand your industry is unlike any other. Only Oracle offers the deep industry domain expertise and hundreds of industry cloud solutions you need to meet your most complex operational, regulatory and customer challenges</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
            </Row>
          </Container>
  )
}