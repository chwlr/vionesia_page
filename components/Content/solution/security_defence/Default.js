import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

export default function Default () {
  return (
    <Container className="security-and-defence">
        <Row style={{ minHeight: '100vh', background: 'white' }}>
            <Col lg={{ span: 6, offset:3}} className="d-flex justify-content-center align-items-center py-5">
                <p className="p-lead text-center">Vionesia has teamed up with several international principals in the area of defense and tactical equipment provider to contribute in the defense and general other industry</p>
            </Col>
        </Row>
    </Container>
  )
}