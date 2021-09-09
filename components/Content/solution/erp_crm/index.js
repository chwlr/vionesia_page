import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button_styled } from '../style'
import Link from 'next/link'
import Oracle from './Oracle'
import Acumatica from './Acumatica'
import Default from './Default'
import Cadena from './Cadena'


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
      case 'cadena':
        return <Cadena  />
      default:
        return <Default />;
    }
 }


  return (
    <Container fluid style={{ minHeight: '90vh' }} className="parent">
      <Row >
        <Col lg={4} className="content-sidebar transform-left-right">
          <Row className="my-5">
            <Col className="pb-5 my-5 mx-4" style={{ color: 'white' }}>
              <h4 className="bold pb-3">System Integration</h4>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('oracle')}>Oracle</p>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('acumatica')}>Acumatica</p>
              {/* <p className="p-lead mx-4">Phicara</p> */}
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('cadena')}>Cadena</p>
              <Link href="/"><Button_styled className="my-3">back</Button_styled></Link>
              {/* when click back toggle class reverse */}
            </Col>
          </Row>
        </Col>
        <Col lg={8} className="content-details transform-right-left">
          <RenderCase a={sol} />
        </Col>
      </Row>
    </Container>
  )
}

export default SolutionOne