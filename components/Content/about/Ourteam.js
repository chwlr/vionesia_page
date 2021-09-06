import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Card_styled } from './style'
import Image from 'next/image'

export default function Ourteam () {
  return (
              <Row style={{ height: '100%', background: 'white' }} className="transform-right-left">
                <Row className="my-5">
                  <Col className="mx-auto my-auto">
                    <h4 className="bold text-center px-5 py-2">Our Team</h4>
                  </Col>
                </Row>
                <Row className="my-2 ">
                  <Col xs="12" md="4" lg="4" className="mx-auto">
                      <Card_styled>
                        <Card.Body>
                          <Image src="/user.png" layout="responsive" alt="Unmanned Technologies" width={300} height={200} />
                          <p className="p-lead text-center pt-3" style={{ marginBottom: '0' }}>Melissa Darmasetiawan</p>
                          <p className="p-regular text-center pt-1" style={{ marginBottom: '0' }}>Co-Founder, Business Development</p>
                        </Card.Body>
                      </Card_styled>
                  </Col>
                  <Col xs="12" md="4" lg="4" className="mx-auto">
                      <Card_styled>
                        <Card.Body>
                          <Image src="/user.png" layout="responsive" alt="Unmanned Technologies" width={300} height={200} />
                          <p className="p-lead text-center pt-3" style={{ marginBottom: '0' }}>Rachmad Novyardi</p>
                          <p className="p-regular text-center pt-1" style={{ marginBottom: '0' }}>Co-Founder, Enterprise Solution</p>
                        </Card.Body>
                      </Card_styled>
                  </Col>
                </Row>
                <Row className="my-2 mb-5">
                  <Col xs="12" md="4" lg="4">
                      <Card_styled>
                        <Card.Body>
                          <Image src="/user.png" layout="responsive" alt="Unmanned Technologies" width={300} height={200} />
                          <p className="p-lead text-center pt-3" style={{ marginBottom: '0' }}>Reza Windya Kusumo</p>
                          <p className="p-regular text-center pt-1" style={{ marginBottom: '0' }}>Enterprise Sales Lead</p>
                        </Card.Body>
                      </Card_styled>
                  </Col>
                  <Col xs="12" md="4" lg="4">
                      <Card_styled>
                        <Card.Body>
                          <Image src="/user.png" layout="responsive" alt="Unmanned Technologies" width={300} height={200} />
                          <p className="p-lead text-center pt-3" style={{ marginBottom: '0' }}>Tommy A. Rachmadi</p>
                          <p className="p-regular text-center pt-1" style={{ marginBottom: '0' }}>Defense Industry Sales Lead</p>
                        </Card.Body>
                      </Card_styled>
                  </Col>
                  <Col xs="12" md="4" lg="4">
                      <Card_styled>
                        <Card.Body>
                          <Image src="/user.png" layout="responsive" alt="Unmanned Technologies" width={300} height={200} />
                          <p className="p-lead text-center pt-3" style={{ marginBottom: '0' }}>Dewi Andriani</p>
                          <p className="p-regular text-center pt-1" style={{ marginBottom: '0' }}>Enterprise Solution Lead</p>
                        </Card.Body>
                      </Card_styled>
                  </Col>
                </Row>
                  
              </Row>
  )
}