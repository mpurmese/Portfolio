"use client"

import React from 'react'
import { Button, Col, Container,Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PanelSeoModuleComponent = () => {
  return (
    <Container fluid  >
  
        <Row className='bg-white mt-lg-5 shadow border' style={{width:"650px"}}  >

        <Row className='mt-3'>
            <Col>
                <h3>Seo Modülü</h3>
            </Col>
        </Row>

            <Col className='my-4'>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Anahtar Kelime</InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>   

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Başlık</InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>   

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Açıklama</InputGroup.Text>
                    <Form.Control
                        as="textarea"
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

export default PanelSeoModuleComponent