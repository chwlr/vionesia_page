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
      case 'uav drone':
        return <Default />
      case 'anti-drone solution':
        return <Default />
      case 'communication equipment':
        return <Default />
      case 'open source intelligent software':
        return <Default />
      case 'social media analytics':
        return <Default />
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
              <h4 className="bold pb-3">Tactical Equipment and Supplier</h4>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('uav drone')}>UAV / Drone</p>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('anti-drone solution')}>Anti-drone Solution</p>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('communication equipment')}>Communication Equipment</p>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('open source intelligent software')}>Open Source Intelligent Software</p>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('social media analytics')}>Social Media Analytics</p>
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