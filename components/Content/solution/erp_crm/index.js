import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Button_styled, Card_styled } from './style'
import Link from 'next/link'
import Image from 'next/image'

export default function SolutionOne() {
  return (
    <Container fluid >
               <Row style={{ background: '#343a40' }}>
                 <Col lg={4} style={{ background: '#343a40' }} className="d-flex align-self-center justify-content-start">
                  <Row>
                   <Col className="pb-5" style={{ color: 'white' }}>
                      <h4 className="bold">System Integration</h4>
                      <Link href="/product/subproducts/erp"><p className="p-lead mx-4">ERP {'&'} CRM</p></Link>
                      <p className="p-lead mx-4">HR Management</p>
                      <Button_styled className="mx-4">back</Button_styled>
                    </Col>
                  </Row>
                 </Col>
                 <Col lg={8} style={{ minHeight: '90vh', minWidth: '100%', background: '#adb5bd' }} className="pb-5 d-flex align-self-center justify-content-center">
                  <Row className="text-center">
                  <div></div>
                    <Col >
                      <Row >
                        <Col className="d-flex flex-wrap justify-content-evenly">
                          <Card_styled>
                            <Card.Body>
                              <Image src="/Oracle.png" width={121} height={30}/>
                              <ul>
                                <li>ERP | CRM (Onpremise {'&'} Cloud)</li>
                                <li>Oracle IaaS | PaaS | Daas Cloud Solution</li>
                              </ul>
                            </Card.Body>
                        </Card_styled>
                          <Card_styled>
                          <Card.Body>
                          <Image src="/acumatica.svg" width={121} height={30}/>
                            <ul>
                              <li>Acumatica Cloud ERP</li>
                              <li>Acumatica Front End Solution</li>
                            </ul>
                          </Card.Body>
                        </Card_styled>
                        </Col>
                      </Row>
                      <Row >
                        <Col className="d-flex flex-wrap justify-content-evenly">
                          <Card_styled>
                          <Card.Body>
                          <Image src="/phiraka.png" width={121} height={44}/>
                            <ul>
                              <li>End-to-End HR Solution</li>
                            </ul>
                          </Card.Body>
                        </Card_styled>
                          <Card_styled>
                          <Card.Body>
                          <Image src="/cadena.jpg" width={121} height={44}/>
                            <ul>
                              <li>Acumatica Cloud ERP</li>
                              <li>Acumatica Front End Solution</li>
                            </ul>
                          </Card.Body>
                        </Card_styled>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  </Col>
                  
               </Row>
             </Container>
  )
}