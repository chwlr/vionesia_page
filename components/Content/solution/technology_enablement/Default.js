import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

export default function Default(){
    return (
        <Container className="technology-enablement">
            <Row style={{ minHeight: '100vh', background: 'white' }}>
                <Col lg={{ span: 6, offset:3}} className="d-flex justify-content-center align-items-center py-5">
                    <p className="p-lead text-center">Provide complex integration and deployment of technology platform, front-end and back-end technology platform. Services covers following scope</p>
                </Col>
            </Row>
        </Container>
    )
}

