import React, {useState} from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Button_styled, Card_styled } from './style'
import Link from 'next/link'
import Oracle from './Oracle'
import Acumatica from './Acumatica'


const SolutionOne = () => {

  const [sol, setSol] = useState('')
  const handleClick = (param) => setSol(param)

  const RenderCase = (param) => {
    const a = param.a;
    switch (a) {
      case 'oracle':
        return <Oracle  />
      case 'acumatica':
        return <Acumatica  />
      default:
        return null;
    }
 }


  return (
    <Container fluid style={{ minHeight: '90vh' }}>
      <Row >
        <Col lg={4} className="content-sidebar">
          <Row className="my-5">
            <Col className="pb-5 my-5 mx-4" style={{ color: 'white' }}>
              <h4 className="bold pb-3">System Integration</h4>
              <p className="p-lead mx-4"  onClick={() => handleClick('oracle')}>Oracle</p>
              <p className="p-lead mx-4" onClick={() => handleClick('acumatica')}>Acumatica</p>
              {/* <p className="p-lead mx-4">Phicara</p> */}
              <p className="p-lead mx-4">Cadena</p>
              <Link href="/"><Button_styled className="my-3">back</Button_styled></Link>
              
            </Col>
          </Row>
        </Col>
        <Col lg={8} className="content-details">

          <RenderCase a={sol}/>
          {/* <Row id="system-integration" className="non-active" style={{ minHeight: '95vh' }}>
            <Col className="d-flex justify-content-center align-items-center py-5">
              <p className="p-lead text-center">Vionesia provides options of enterprise product to meet industry specific requirement & customer needs</p>
            </Col>
          </Row>
          
          
          
          <Row id="phiraka" className="non-active my-5">
            <Row>
              <Col><h4 className="bold text-center py-5" style={{ color: 'black' }}>Cadena HRM</h4></Col>
            </Row>
            <Col xs="12" md={{ span: 6, offset: 3 }}>
              <Card_styled>
                <Card.Body>
                  <p className="p-lead">Cadena HRM Series</p>
                  <p className="p-regular">Cadena, we have always put our people first. For over 14 years, it has driven us to create the innovative HRM solution we offer today: Series |5. Incubated in the US, we offer a solution that is compliant to local tax/labor laws across the entire South-East Asia region. In every country where we operate, we guarantee necessary expertise through a network of local knowledgeable partners or our own offices.</p>
                </Card.Body>
              </Card_styled>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </Container>
  )
}

export default SolutionOne