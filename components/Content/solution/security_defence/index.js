import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button_styled } from '../style'
import Link from 'next/link'
import Default from './Default'
import Freshvale from './Freshvale'
import Tenable from './Tenable'
import Visionlabs from './Visionlabs'


const SolutionTwo = () => {

  const [sol, setSol] = useState('')
  const handleClick = (param) => setSol(param)

  const RenderCase = (param) => {
    const a = param.a;
    switch (a) {
      case 'freshvale':
        return <Freshvale />
      case 'tenable':
        return <Tenable />
      case 'visionlabs':
        return <Visionlabs />
      default:
        return <Default />
    }
 }


  return (
    <Container fluid style={{ minHeight: '90vh' }} className="parent">
      <Row >
        <Col lg={4} className="content-sidebar transform-left-right">
          <Row className="my-5">
            <Col className="pb-5 my-5 mx-4" style={{ color: 'white' }}>
              <h4 className="bold pb-3">Security & Defence</h4>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('freshvale')}>FreshVale</p>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('tenable')}>Tenable</p>
              {/* <p className="p-lead mx-4">Phicara</p> */}
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('visionlabs')}>VisionLabs</p>
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

export default SolutionTwo