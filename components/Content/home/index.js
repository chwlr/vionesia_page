import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Container_styled, IcStyled, Button_styled, Card_styled, Discover_styled, Col_discover, Dicover_card, Expertise_styled  } from './style'
import Link from 'next/link'

export default function HomeContent () {
  return (
             <Container fluid className="parent">
               <Row style={{ minHeight: '95vh' }} className="parent">
                 <Col lg={4} style={{ background: '#343a40' }} className="transform-left-right">
                  <Row className="my-5">
                   <Col className="pb-5 my-5 mx-4" style={{ color: 'white' }}>
                      <h4 className="bold" >System Integration</h4>
                      <p className="p-lead">ERP, CRM, HR Cloud Solution </p>
                      <Link href="/products/erp-crm-and-hr"><Button_styled>Details</Button_styled></Link>
                    </Col>
                  </Row>
                 </Col>
                 <Col lg={4} style={{ background: '#fff' }} className="transform-right-left">
                  <Row className="my-5">
                   <Col className="pb-5 my-5 mx-4" style={{ color: 'black' }}>
                      <h4 className="bold" >Defence & Security</h4>
                      <p className="p-lead">Unmanned Technologies, Anti-Drone Technologies, Facial Recognition, Cyber Security, Social Media Analytics </p>
                      <Link href="/products/security-and-defence"><Button_styled>Details</Button_styled></Link>
                    </Col>
                  </Row>
                 </Col>
                 <Col lg={4} style={{ background: '#343a40' }} className="transform-right-left">
                  <Row className="my-5">
                   <Col className="pb-5 my-5 mx-4" style={{ color: 'white' }}>
                      <h4 className="bold" >Technology Enablement</h4>
                      <p className="p-lead">Mobile Apps Development, WebApps Integrations, Virtual Reality, Internet of Things (IoT)</p>
                      <Link href="/products/erpcrm"><Button_styled>Details</Button_styled></Link>
                    </Col>
                  </Row>
                 </Col>
                 
               </Row>
             </Container>
  )
}
