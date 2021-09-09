import React from 'react'
import {Row, Col, Card, Container} from 'react-bootstrap'
import { Card_styled } from '../style'
import Image from 'next/image'

export default function Freshvale () {
  return (
    <Container id="oracle" className="my-5">
            <Row>
                <Col className="justify-content-center align-items-center">
                    <h4 className="bold text-center py-5" style={{ color: 'black' }}>FreshVale Solutions</h4>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead text-center">Unmanned Technologies</p>
                            <Image src="/unmanned_tech.jpg" layout="responsive" alt="Unmanned Technologies" width={300} height={200} />
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead text-center">Anti-Drone Technologies</p>
                            <Image src="/antidrone.jpg" layout="responsive" alt="Anti-Drone Technologies" width={300} height={200} />
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead text-center">Social Media Analytics</p>
                            <Image src="/socialmedianalytic.jpg" layout="responsive" alt="social media analytic" width={300} height={200} />
                        </Card.Body>
                    </Card_styled>
                </Col>
            </Row>
            
          </Container>
  )
}