"use client"

import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  return (
    <Container fluid>
        <Row>
            <Col className='p-4 border shadow mb-5 bg-white '>
                <Form>
                    <Row>
                        <Col className='col-6'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Adınız Soyadınız</Form.Label>
                                <Form.Control type="text" placeholder="Adınızı ve Soyadınızı Girin" />
                            </Form.Group>
                        </Col>

                        <Col className='col-6'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="E-posta Adresinizi Girin" />

                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Label>Konu</Form.Label>
                        <Form.Control type="text" placeholder="Konu Girin" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mesaj</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Gönder
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactForm
