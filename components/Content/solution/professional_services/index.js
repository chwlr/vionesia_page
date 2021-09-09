import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button_styled } from '../style'
import Link from 'next/link'


const SolutionFour = () => {

    const [sol, setSol] = useState('')
    const handleClick = (param) => setSol(param)

    const RenderCase = (param) => {
        const a = param.a;
        switch (a) {
            case 'webdeveloper':
                return '<Oracle  />'
            case 'mobiledeveloper':
                return '<Acumatica  />'
            case 'datascience':
                return '<Cadena  />'
            case 'systemanalyst':
                return '<Cadena  />'
            case 'qualityassurance':
                return '<Cadena  />'
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
                            <h4 className="bold pb-3">Professional Services</h4>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('webdeveloper')}>Web Developer</p>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('mobiledeveloper')}>Mobile Developer</p>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('datascience')}>Data Science</p>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('systemanalyst')}>System Analyst</p>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('qualityassurance')}>Quality Assurance</p>
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

export default SolutionFour