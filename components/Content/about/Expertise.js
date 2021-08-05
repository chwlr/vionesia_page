import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { RowStyled, ShadowStyled } from './style'

export default function Expertise () {
  return (
              <RowStyled style={{ height: '100%' }} className="transform-right-left">
                  <Col className="mx-auto my-auto text-center">
                      <h5 className="bold text-center px-5 py-2">Our Area of Expertise</h5>
                      <p className="p-lead py-1 my-auto">Digital Marketing</p>
                      <p className="p-lead py-1 my-auto">Cloud Solution & Development</p>
                      <p className="p-lead py-1 my-auto">ERP, CRM & HR Cloud Solution</p>
                      <p className="p-lead py-1 my-auto">Technology Platform Integration</p>
                      <p className="p-lead py-1 my-auto">Financial Planning & Budgeting</p>
                      <p className="p-lead py-1 my-auto">Business Enabler For STARTUP</p>
                  </Col>
              </RowStyled>
  )
}