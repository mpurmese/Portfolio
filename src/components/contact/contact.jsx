import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactText from './contactText'
import ContactForm from './contactForm'
import ContactLeft from './contactLeft'

const ContactComponent = () => {
  return (
    <Container fluid className='container-custom'>
        <Row>
            <Col>
                <h1>İletişim</h1>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <ContactText/>
            </Col>
        </Row>
        <Row>
            <Col className='col-12 col-lg-6'>
                <ContactLeft/>
            </Col>
            <Col className='col-12 col-lg-6'>
                <ContactForm/>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactComponent