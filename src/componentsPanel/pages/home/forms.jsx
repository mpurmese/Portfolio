"use client"

import React from 'react'
import { Button, Col, Container,Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PanelPageHomeFormsComponent = () => {
  return (
    <Container fluid >
        <Row className='bg-white mt-lg-4 shadow border'>
            <Col className='my-4'>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Ad Soyad</InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>   


                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Meslek</InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup> 


                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Arka Plan (5120 x 2880)</InputGroup.Text>
                    <Form.Control
                        type="file"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup> 

                <Button variant="dark">Kaydet</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelPageHomeFormsComponent