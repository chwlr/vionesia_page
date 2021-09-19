import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Column_styled } from './style'
import Link from 'next/link'

export default function HomeContent () {
  return (
             <Container className="home-container parent-animation">
                 <Row className="mx-auto transform-right-left ">
                     <Column_styled md={6} lg={6} >
                         <h4 className="bold" >System Integrator</h4>
                         <p className="p-lead">End-to-end of enterprize system implementation for enterprise scale to medium scale organization</p>
                         <Link href="/products/erp-crm-and-hr"><Button className="btn-dark btn-md rounded-pill">Details</Button></Link>
                     </Column_styled>
                     <Column_styled md={6} lg={6} >
                         <h4 className="bold" >Professional Services</h4>
                         <p className="p-lead">Vionesia provide IT Professionals to helo customer manage their specific area of businesses</p>
                         <Link href="/products/professional-services"><Button className="btn-dark btn-md rounded-pill">Details</Button></Link>
                     </Column_styled>
                 </Row>
                 <Row className="mx-auto transform-left-right ">
                     <Column_styled md={6} lg={6} >
                         <h4 className="bold" >Tactical Equipment Supplier</h4>
                         <p className="p-lead">Vioensia has teamed up with several international principals in the area of defence and tactical equipment provider to contribute in the defence and general other industry</p>
                         <Link href="/products/security-and-defence"><Button className="btn-dark btn-md rounded-pill">Details</Button></Link>
                     </Column_styled>
                     <Column_styled md={6} lg={6} >
                         <h4 className="bold" >Technology Enablement</h4>
                         <p className="p-lead">Provide complex integration and deployment of technology platform, front-end and back-end technology platform</p>
                         <Link href="/products/technology-enablement"><Button className="btn-dark btn-md rounded-pill">Details</Button></Link>
                     </Column_styled>
                 </Row>
             </Container>
  )
}
