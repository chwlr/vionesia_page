import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Dropdown = () => {
  return (
    <Container className="dropdown">
      <Row>
        <Col lg={{span: 3, offset: 2}}>
          <Link className="p-lead link-style" href="/products/erp-crm">Vionesia ERP, CRP and HR Solutions</Link>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 3, offset: 2}}>
          <Link className="link-style" href="/products/erp-crm">Vionesia ERP, CRP and HR Solutions</Link>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 3, offset: 2}}>
          <Link className="link-style" href="/products/erp-crm">Vionesia ERP, CRP and HR Solutions</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Dropdown