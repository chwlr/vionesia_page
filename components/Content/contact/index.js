import React from 'react'
import Link from 'next/link'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'


export default function ContactContent () {
  return (
      <Container className="my-5">
        <Row>
          <Col className="text-center">
            <h4 style={{ margin: '2em 0 2em 0' }}>Get in touch!</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4" className="my-2">
            <Card style={{ height: '170px', cursor: 'pointer' }}>
              <Link target="_blank" href="https://www.google.com/maps/place/WeWork+Revenue+Tower/@-6.2274855,106.804918,17z/data=!4m12!1m6!3m5!1s0x2e69f13dae348f75:0x59801b675cfb09e8!2sWeWork+Revenue+Tower!8m2!3d-6.2274855!4d106.8071067!3m4!1s0x2e69f13dae348f75:0x59801b675cfb09e8!8m2!3d-6.2274855!4d106.8071067">
                <Card.Body className=" d-flex flex-column align-items-center text-center">
                  <FaMapMarkerAlt style={{ fontSize: '30px', color: '#155BDA' }} className="my-3"/>
                  <small>Revenue Tower Building,  25th Floor Sudirman Central Business District Jl. Jend. Sudirman No.52-53, Jakarta, 12190, Indonesia</small>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col lg="4" className="my-2" >
            <Card style={{ height: '170px' }}>
              <Card.Body className=" d-flex flex-column  align-items-center text-center">
                {/* <img src="/ic-phone.svg" style={{ width: "30px", height: "auto" }} className="my-3" /> */}
                <FaPhoneAlt style={{ fontSize: '30px', color: '#155BDA' }} className="my-3"/>
                <small>+62 21 2598 5152</small>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="my-2">
            <Card style={{ height: '170px' }}>
              <Card.Body className=" d-flex flex-column  align-items-center text-center">
                {/* <img src="/ic-mail.svg" style={{ width: "30px", height: "auto" }} className="my-3" /> */}
                <MdMail style={{ fontSize: '30px', color: '#155BDA' }} className="my-3"/>
                <small>sales@vionesia.com</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}
