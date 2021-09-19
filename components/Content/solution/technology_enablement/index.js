import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button_styled } from '../style'
import Link from 'next/link'
import MobileDev from './MobileDev'
import Webapp from './Webapp'
import VirtualReality from './VirtualReality'
import IoT from './IoT'
import Default from "./Default"


const SolutionTre = () => {

  const [sol, setSol] = useState('')
  const handleClick = (param) => setSol(param)

  const RenderCase = (param) => {
    const a = param.a;
    switch (a) {
      case 'cloud migration and deployment':
        return <Default />
      case 'complex integration':
        return <Default />
      case 'hardware and sensor integration':
        return <Default />
      case 'mobile app and web app development':
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
              <h4 className="bold pb-3">Security & Defence</h4>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('cloud migration and deployment')}>Cloud Migration & Deployment; “shift & lift” from on-premise to cloud</p>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('complex integration')}>Complex integrations; front-end and back-end integrations</p>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('hardware and sensor integration')}>Hardware and sensor integration; sensors, camera, equipments (IoT)</p>
              <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('mobile app and web app development')}>Mobile App (Android/iOS) & Web App Development</p>
              <Link href="/"><Button_styled className="my-3">back</Button_styled></Link>
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

export default SolutionTre