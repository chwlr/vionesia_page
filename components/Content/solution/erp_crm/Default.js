import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

export default function Default () {
  return (
    <Container className="system-integration">
        <Row style={{ minHeight: '100vh', background: 'white' }}>
            <Col lg={{ span: 6, offset:3}} className="d-flex justify-content-center align-items-center py-5">
                <p className="p-lead text-center">Vionesia provides options of enterprise product to meet industry specific requirement & customer needs</p>
            </Col>
        </Row>
    </Container>
  )
}