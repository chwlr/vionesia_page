import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Container_styled } from './style'


export default function AboutContent () {
  return (
      <>
        <Container_styled fluid>
          <Row style={{height: '100%', padding: '0 5vw 0 5vw', margin: '0 0 0 0' }}>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center" style={{ fontWeight: 'bold', textShadow: '2px 2px 2px #155BDA', color: 'white' }}>We are Helping to Create <br></br>  Digital Business Transformation</h1>
            </Col>
          </Row>
        </Container_styled>
        <Container className="my-5">
          <Row style={{ margin: '2em 0 3em 0' }}>
              <h3 style={{ margin: '0 0 1em 0' }} className="text-center">Our story</h3>
              <Col></Col>
            <Col lg="4" >
              <p style={{ margin: '0 1.2em 0 1.2em', textAlign: 'center' }}>
              Our strongest assets are the team working for the company with extensive hands-on experience and knowledge of technology and combined business practice with less than 10 years of solid and hands-on experience. Vionesia consists of various talents and knowledge to enrich the team, that has been doing technology and consulting practices since early 2000.
              </p>
            </Col>
            <Col></Col>
          </Row>
          <Row style={{ margin: '2em 0 3em 0' }}>
            <Col lg="12">
              <h3 style={{ margin: '0 0 1em 0' }} className="text-center">Our team</h3>
            </Col>
          </Row>
          <Row style={{ margin: '2em 0 3em 0' }}>
            <Col lg="6" className="d-flex align-items-center justify-content-center my-1">
              <Card style={{ width: '250px', height: '350px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Melissa Darmasetiawan</Card.Title>
                  <Card.Text>Co-Founder, Business Development</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6" className="d-flex align-items-center justify-content-center my-1">
              <Card style={{ width: '250px', height: '350px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Rachmad Novyardi</Card.Title>
                  <Card.Text>Founder, Enterprise Solution
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ margin: '2em 0 3em 0' }}>
            <Col lg="4" className="d-flex align-items-center justify-content-center my-1">
              <Card style={{ width: '250px', height: '350px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Reza Windya Kusumo</Card.Title>
                  <Card.Text>Enterprise Sales Lead
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="d-flex align-items-center justify-content-center my-1">
              <Card style={{ width: '250px', height: '350px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Tommy A. Rachmadi</Card.Title>
                  <Card.Text>Defense Industry Sales Lead
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="d-flex align-items-center justify-content-center my-1">
              <Card style={{ width: '250px', height: '350px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Dewi Andriani</Card.Title>
                  <Card.Text>Enterprise Solution Lead
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ margin: '2em 0 3em 0' }}>
            <Col lg="4">
              <h3 style={{ margin: '0 0.2em 1em 0.2em' }} className="text-center">Our values</h3>
            </Col>
            <Col md="12" lg="6" style={{ margin: '0 0 3em 0' }}>
                <Row style={{ margin: '0em 0 1.5em 0' }}>
                  <Col className="d-flex align-items-center justify-content-center">
                    <img src="/honest_respect.svg" style={{ width: '100%', height: '150px' }} />
                  </Col>
                  <Col>
                  <h5>Mission statement</h5>
                  <p>Our mission is to help and leverage organization and people whom we engage with through experience and knowledge we’ve acquire from our talents and professionals. It We do this from the beginning from hiring to deploy our resources as part of the culture.</p>
                  </Col>
                </Row>
                <hr></hr>
                <Row style={{ margin: '1.5em 0 1.5em 0' }}>
                  <Col className="d-flex align-items-center justify-content-center">
                    <img src="/mission_state.svg" style={{ width: '100%', height: '150px' }} />
                  </Col>
                  <Col>
                  <h5>Honest and respect</h5>
                  <p>We value honesty as part of our professional practice. From the beginning of our engagement to decision making starts from sincere and honest communication. Above all respect of people and culture, regardless what has been our true color.</p>
                  </Col>
                </Row>
                <hr></hr>
                <Row style={{ margin: '1.5em 0 1.5em 0' }}>
                  <Col className="d-flex align-items-center justify-content-center">
                    <img src="/team_work.svg" style={{ width: '100%', height: '150px' }} />
                  </Col>
                  <Col>
                  <h5>Team player</h5>
                  <p>When we set out to hire and recruit, we always tend to seek the best talent in the market. Though we do not undermine the capability of our talents to work as a team, team player and treat our customers as a team.</p>
                  </Col>
                </Row>
            </Col>
            <Col></Col>
          </Row>
          
        </Container>
      </>
      
  )
}
