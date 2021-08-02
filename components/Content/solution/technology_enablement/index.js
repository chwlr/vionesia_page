import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button_styled } from '../style'
import Link from 'next/link'
import MobileDev from './MobileDev'
import Webapp from './Webapp'
import VirtualReality from './VirtualReality'
import IoT from './IoT'


const SolutionTre = () => {

  const [sol, setSol] = useState('')
  const handleClick = (param) => setSol(param)

  const RenderCase = (param) => {
    const a = param.a;
    switch (a) {
      case 'mobile':
        return <MobileDev  />
      case 'webapps':
        return <Webapp  />
      case 'virtual':
        return <VirtualReality  />
      case 'internet':
        return <IoT  />
      default:
        return '<Default />'
    }
 }


  return (
    <Container fluid style={{ minHeight: '90vh' }} className="parent">
      <Row >
        <Col lg={4} className="content-sidebar transform-left-right">
          <Row className="my-5">
            <Col className="pb-5 my-5 mx-4" style={{ color: 'white' }}>
              <h4 className="bold pb-3">Security & Defence</h4>
              <p className="p-lead mx-4"  onClick={() => handleClick('mobile')}>Mobile Apps Development</p>
              <p className="p-lead mx-4" onClick={() => handleClick('webapps')}>WebApps Integrations</p>
              <p className="p-lead mx-4" onClick={() => handleClick('virtual')}>Virtual Reality</p>
              <p className="p-lead mx-4" onClick={() => handleClick('internet')}>Internet of Things (IoT)</p>
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