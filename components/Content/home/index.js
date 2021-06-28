import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export default function HomeContent () {
  return (
          <Row style={{ margin: '0', height: '100%' }}>
            <Col md="12" lg="4" className="d-flex flex-column justify-content-center align-items-start" style={{ height: '500px', padding: '0 3em 0 3em' }}>
              <h4>Technology enablement</h4>
              <p>Provide complex integration and deployment of technology platform, front-end and back-end technology platform.</p>
              <Button>more</Button>
            </Col>
            <Col md="12" lg="4" className="d-flex flex-column justify-content-center align-items-start" style={{ height: '500px', padding: '0 3em 0 3em' }}>
              <h4>System integrator</h4>
              <p>End-to-end of enterprise system implementation for enterprise scale to medium scale organization.</p>
              <Button>more</Button>
            </Col>
            <Col md="12" lg="4" className="d-flex flex-column justify-content-center align-items-start" style={{ height: '500px', padding: '0 3em 0 3em' }}>
              <h4>Professional services</h4>
              <p>Vionesia provide IT Professionals to help customers manage their specific area of business.</p>
              <Button>more</Button>
            </Col>
          </Row>
  )
}
