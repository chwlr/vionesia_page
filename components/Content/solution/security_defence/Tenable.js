import React from 'react'
import {Row, Col, Card, Container} from 'react-bootstrap'
import { Card_styled } from '../style'
import Image from 'next/image'

export default function Tenable () {
  return (
      <Container id="oracle" className="my-5 transform-right-left">
            <Row>
                <Col>
                    <h4 className="bold text-center py-5" style={{ color: 'black' }}>Tenable Solutions</h4>
                </Col>
            </Row>
            <Row>
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
                            <p className="p-regular text-left py-2">Managed in the cloud and powered by Nessus technology, Tenable.io provides the industry's most comprehensive vulnerability coverage with the ability to predict which security issues to remediate first. It’s your complete end-to-end vulnerability management solution.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <Image src="/tenable-sc.svg" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                            <p className="p-regular text-left py-2">Managed on-premises and powered by Nessus technology, the Tenable.sc suite of products provides the industry's most comprehensive vulnerability coverage with real-time continuous assessment of your network. It’s your complete end-to-end vulnerability management solution.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <Image src="/tenable-ad.svg" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                            <p className="p-regular text-left py-2">Tenable.ad enables you to see everything, predict what matters, and act to address risk in Active Directory to disrupt attack paths before attackers exploit them.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <Image src="/tenable-ot.svg" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                            <p className="p-regular text-left py-2">IT and OT environments are rapidly converging. The days of air-gapped systems are gone. Industrial and critical infrastructure organizations are adopting IoT technology at an unprecedented rate. While these new technologies yield extreme efficiencies and cost-savings, they are not without risk. Without comprehensive OT security, your attack surface and attack vectors increase, leading to unacceptable risk.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <Image src="/tenable-lumen.svg" layout="responsive" alt="Unmanned Technologies" width={100} height={15} />
                            <p className="p-regular text-left py-2">Use Tenable Lumin, an advanced visualization, decision support, analytics and measurement solution, to understand and reduce your Cyber Exposure. Lumin transforms vulnerability data into meaningful insights to help you manage cyber risk across your entire organization.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
            </Row>
            
      </Container>
  )
}