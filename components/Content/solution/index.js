import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Container_styled, ContainerCrm, Container_content, IcStyled, CardStyled} from './style'


export default function SolutionContent () {
  return (
      <>
      <Container_styled fluid>
        <Row style={{height: '100%', padding: '0 5vw 0 5vw', margin: '0 0 0 0' }}>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center" style={{ fontWeight: 'bold', textShadow: '2px 2px 2px #155BDA', color: 'white' }}>Get The Best Solution <br></br> For Your Business Needed</h1>
          </Col>
        </Row>
      </Container_styled>
      <ContainerCrm fluid className="py-5">
        <Row>
          <Col>
            <h2 className="text-center" style={{ fontWeight: '300', color: '#2E2E2E', textShadow: '1px 1px 3px #D1EDFF' }}>Regional Principal Partnership</h2>
          </Col>
        </Row>
        <Container_content>
            <CardStyled>
              <h4 className="text-center mx-4 my-2">ERP {'&'} CRM</h4>
              <div className="d-flex flex-column align-items-center" style={{ height: '70%' }}>
              <IcStyled src="/Oracle.png"/>
              <IcStyled src="/acumatica.svg"/>
              <IcStyled src="/Killiney-Asia.png"/>
              </div>
            </CardStyled>
            <CardStyled>
              <h4 className="text-center mx-4 my-2">Logistic Management</h4>
              <div className="d-flex flex-column align-items-center" style={{ height: '70%' }}>
              <IcStyled src="/pando.svg"/>
              </div>
            </CardStyled>
            <CardStyled>
              <h4 className="text-center mx-4 my-2">Budgeting {'&'} Reporting Management </h4>
              <div className="d-flex flex-column align-items-center" style={{ height: '70%' }}>
              <IcStyled src="/anaplan.png"/>
              <IcStyled src="/board-logo.svg"/>
              </div>
            </CardStyled>
            <CardStyled>
              <h4 className="text-center mx-4 my-2">HR Management </h4>
              <div className="d-flex flex-column align-items-center" style={{ height: '70%' }}>
                <IcStyled src="/cadena.jpg"/>
                <IcStyled src="/phiraka.png"/>
              </div>
            </CardStyled>
            <CardStyled>
              <h4 className="text-center mx-4 my-2">Tactical Equipment </h4>
              <div className="d-flex flex-column align-items-center" style={{ height: '70%' }}>
                <IcStyled src="/freshvale.png"/>
                <IcStyled src="/weatherprotectas.png"/>
              </div>
            </CardStyled>
            <CardStyled>
              <h4 className="text-center mx-4 my-2">IT Security</h4>
              <div className="d-flex flex-column align-items-center" style={{ height: '70%' }}>
                <IcStyled src="/mcafee.png"/>
                <IcStyled src="/dreamlabtech.svg"/>
                <IcStyled src="/infoblox.png"/>
                <IcStyled src="/tenable.png"/>
              </div>
            </CardStyled>
        </Container_content>
        </ContainerCrm>
       
      
      </>
  )
}
