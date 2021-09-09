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
                         <p className="p-lead">ERP, CRM, HR Cloud Solution</p>
                         <Link href="/products/erp-crm-and-hr"><Button className="btn-dark btn-md rounded-pill">Details</Button></Link>
                     </Column_styled>
                     <Column_styled md={6} lg={6} >
                         <h4 className="bold" >Professional Services</h4>
                         <p className="p-lead">Front End-Developer, Back-End Developer, Full Stack
                             Developer, System Analyst, Quality Assurance Analysis</p>
                         <Link href="/products/professional-services"><Button className="btn-dark btn-md rounded-pill">Details</Button></Link>
                     </Column_styled>
                 </Row>
                 <Row className="mx-auto transform-left-right ">
                     <Column_styled md={6} lg={6} >
                         <h4 className="bold" >Defence & Security</h4>
                         <p className="p-lead">Unmanned Technologies, Anti-Drone Technologies, Facial Recognition, Cyber Security, Social Media Analytics </p>
                         <Link href="/products/security-and-defence"><Button className="btn-dark btn-md rounded-pill">Details</Button></Link>
                     </Column_styled>
                     <Column_styled md={6} lg={6} >
                         <h4 className="bold" >Technology Enablement</h4>
                         <p className="p-lead">Cloud Migration & Deployment, Complex integrations, Hardware and sensor integration</p>
                         <Link href="/products/technology-enablement"><Button className="btn-dark btn-md rounded-pill">Details</Button></Link>
                     </Column_styled>
                 </Row>
             </Container>
  )
}
