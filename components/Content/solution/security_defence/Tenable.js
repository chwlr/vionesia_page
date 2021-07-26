import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Card_styled } from '../style'
import Image from 'next/image'

export default function Tenable () {
  return (
    <Row id="oracle" className="my-5 transform-right-left">
            <Row>
              <Col>
                <h4 className="bold text-center py-5" style={{ color: 'black' }}>Tenable Solutions</h4>
              </Col>
            </Row>
            <Col xs="12" md="4" lg="4">
              <Card_styled>
                <Card.Body>
                  <Image src="/tenable-ep.svg" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                  <p className="p-regular text-left py-2">Tenable.ep is a comprehensive risk-based vulnerability management solution that enables you to determine the cyber exposure of all of your assets, everywhere, on every platform, at all times.</p>
                </Card.Body>
              </Card_styled>
            </Col>
            <Col xs="12" md="4" lg="4">
              <Card_styled>
                <Card.Body>
                <Image src="/tenable-io.svg" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                </Card.Body>
              </Card_styled>
            </Col>
            <Col xs="12" md="4" lg="4">
              <Card_styled>
                <Card.Body>
                <Image src="/tenable-sc.svg" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                </Card.Body>
              </Card_styled>
            </Col>
            <Col xs="12" md="4" lg="4">
              <Card_styled>
                <Card.Body>
                <Image src="/tenable-ad.svg" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                </Card.Body>
              </Card_styled>
            </Col>
            <Col xs="12" md="4" lg="4">
              <Card_styled>
                <Card.Body>
                <Image src="/tenable-ot.svg" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                </Card.Body>
              </Card_styled>
            </Col>
            <Col xs="12" md="4" lg="4">
              <Card_styled>
                <Card.Body>
                <Image src="/tenable-lumen.svg" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                </Card.Body>
              </Card_styled>
            </Col>
            <Col xs="12" md="4" lg="4">
              <Card_styled>
                <Card.Body>
                <Image src="/tenable-nessus.png" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                </Card.Body>
              </Card_styled>
            </Col>
            
          </Row>
  )
}