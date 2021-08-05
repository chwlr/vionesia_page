import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { Dropdowner } from './style'

const Dropdown = () => {
  return (
    <Dropdowner className="transform-left-right">
      <Row className="my-5 mx-auto text-center">
        <Col >
          <Link className="p-lead link-style" href="/products/erp-crm">Vionesia ERP, CRP and HR Solutions</Link>
        </Col>
        <Col >
          <Link className="p-lead link-style" href="/products/erp-crm">Vionesia ERP, CRP and HR Solutions</Link>
        </Col>
        <Col >
          <Link className="p-lead link-style" href="/products/erp-crm">Vionesia ERP, CRP and HR Solutions</Link>
        </Col>
      </Row>
    </Dropdowner>
  )
}

export default Dropdown