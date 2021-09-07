import React from 'react'
import {Row, Col, Card, Container} from 'react-bootstrap'
import { Card_styled } from '../style'

export default function Acimatica () {
  return (
    <Container id="acumatica" className="my-5 transform-right-left">
            <Row>
              <Col className="justify-content-center align-items-center">
                  <h4 className="bold text-center py-5" style={{ color: 'black' }}>Acumatica Cloud ERP Software</h4>
              </Col>
            </Row>
            <Row>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead">General Business Edition</p>
                            <p className="p-regular">One complete package to run your business: Financials, Project Accounting, CRM, and Reporting and BI.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead">Distribution Edition</p>
                            <p className="p-regular">Manage quotes and orders, track inventory, automate purchasing, and improve customer service. Acumatica Distribution Management is fully integrated with CRM, financials, manufacturing and project accounting for visibility across the entire organization.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead">Manufacturing Edition</p>
                            <p className="p-regular">Integrate production planning, material purchasing, and shop floor scheduling with customer management, sales orders, inventory, purchasing, and accounting for real-time coordination of multi-plant activities. Use phones and tablets to capture material issues, move transactions, and labor with Acumatica’s mobile app and scanning.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead">Construction Edition</p>
                            <p className="p-regular">Easily manage customers, finances—including job cost accounting—field and service teams in one complete solution. Increase visibility, team collaboration, and profitability on every project.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
                <Col xs="12" md="4" lg="4">
                    <Card_styled>
                        <Card.Body>
                            <p className="p-lead">Retail-Commerce Edition</p>
                            <p className="p-regular">Deliver a consistent customer experience across all your sales channels with full integration between your online, mobile, kiosk, and in-store service.</p>
                        </Card.Body>
                    </Card_styled>
                </Col>
            </Row>
          </Container>
  )
}