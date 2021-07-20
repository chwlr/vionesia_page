import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Container_styled, IcStyled, Button_styled, Card_styled, Discover_styled, Col_discover, Dicover_card, Expertise_styled  } from './style'
import Link from 'next/link'

export default function HomeContent () {
  return (
             <Container fluid >
               <Row style={{ minHeight: '95vh' }}>
                 <Col lg={4} style={{ background: '#343a40' }}>
                  <Row>
                   <Col className="pb-5" style={{ color: 'white' }}>
                      <h4 className="bold" >System Integration</h4>
                      <p className="p-lead">ERP, CRM, HR Cloud Solution </p>
                      <Link href="/products/erpcrm"><Button_styled>Details</Button_styled></Link>
                    </Col>
                  </Row>
                 </Col>
                 <Col lg={4} style={{ background: '#adb5bd' }}>
                  <Row style={{ minHeight: '180px' }}></Row>
                  <Row >
                    <Col className="pb-5">
                      <h4 className="bold">Reprehenderit ex labore ex enim</h4>
                      <p className="p-lead">In labore id aliqua amet sit ut aliqua elit ut <br></br><strong>occaecat reprehenderit exercitation minim. </strong></p>
                      <Button_styled >Details</Button_styled>
                    </Col>
                  </Row>
                  </Col>
                 <Col lg={4} style={{ background: '#343a40' }}>
                  <Row style={{ minHeight: '180px' }}></Row>
                  <Row>
                    <Col className="pb-5">
                      <h4 className="bold">Reprehenderit ex labore ex enim</h4>
                      <p className="p-lead">In labore id aliqua amet sit ut aliqua elit ut occaecat reprehenderit exercitation minim.</p>
                      <Button_styled >Details</Button_styled>
                    </Col>
                  </Row>
                  </Col>
               </Row>
             </Container>
  )
}
