import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Container_styled, IcStyled, Button_styled, Card_styled, Discover_styled, Col_discover, Dicover_card, Expertise_styled  } from './style'

export default function HomeContent () {
  return (
             <Container fluid >
               <Row style={{ minHeight: '95vh' }}>
                 <Col lg={4} style={{ background: '#8ACDFF' }}>
                  <Row style={{ minHeight: '200px' }}></Row>
                  <Row>
                   <Col>
                   <h1>Reprehenderit ex labore ex enim</h1>
                    <p>In labore id aliqua amet sit ut aliqua elit ut occaecat reprehenderit exercitation minim. Dolore eiusmod et cupidatat quis commodo deserunt aliqua proident pariatur. Mollit proident ut et magna voluptate non dolor.</p>
                    <Button >Details</Button></Col>
                  </Row>
                 </Col>
                 <Col lg={4} style={{ background: '#53FFCB' }}>
                  <Row style={{ minHeight: '200px' }}></Row>
                  <Row>
                    <Col><h1>Reprehenderit ex labore ex enim</h1>
                    <p>In labore id aliqua amet sit ut aliqua elit ut occaecat reprehenderit exercitation minim. Dolore eiusmod et cupidatat quis commodo deserunt aliqua proident pariatur. Mollit proident ut et magna voluptate non dolor.</p>
                    <Button >Details</Button></Col>
                  </Row>
                  </Col>
                 <Col lg={4} style={{ background: '#8053FF' }}>
                  <Row style={{ minHeight: '200px' }}></Row>
                  <Row>
                    <Col>
                    <h1>Reprehenderit ex labore ex enim</h1>
                    <p>In labore id aliqua amet sit ut aliqua elit ut occaecat reprehenderit exercitation minim. Dolore eiusmod et cupidatat quis commodo deserunt aliqua proident pariatur. Mollit proident ut et magna voluptate non dolor.</p>
                    <Button >Details</Button></Col>
                  </Row>
                  </Col>
               </Row>
             </Container>
  )
}
