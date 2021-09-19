import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button_styled } from '../style'
import Link from 'next/link'
import Default from "./Default";


const SolutionFour = () => {

    const [sol, setSol] = useState('')
    const handleClick = (param) => setSol(param)

    const RenderCase = (param) => {
        const a = param.a;
        switch (a) {
            case 'software development':
                return <Default />
            case 'help desk':
                return <Default />
            case 'web development':
                return <Default />
            case 'application support':
                return <Default />
            case 'data centre':
                return <Default />
            case 'quality assurance':
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
                            <h4 className="bold pb-3">Professional Services</h4>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('software development')}>Application / Software development</p>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('help desk')}>Help Desk / Technical support</p>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('web development')}>Web development</p>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('application support')}>Application support</p>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('data centre')}>Monitoring for application / Data Centre</p>
                            <p className="p-lead mx-4 side-navigation-tab" onClick={() => handleClick('quality assurance')}>Quality Assurance</p>
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