"use client"

import React from 'react'
import { Button, Col, Container,Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PanelProfileFormsComponent = () => {
  return (
    <Container fluid>

        <Row className='bg-white mt-5  mt-lg-4 shadow border'>
            <Col className='col-12  mt-4  '>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">İsim</InputGroup.Text>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Instegram</InputGroup.Text>
                    <Form.Control
                    type="url"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Linkedin</InputGroup.Text>
                    <Form.Control
                    type="url"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">GitGub</InputGroup.Text>
                    <Form.Control
                    type="url"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Profil Resmi</InputGroup.Text>
                    <Form.Control
                    type='file'
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>

                <Button variant="dark" className='mb-3'>Kaydet</Button>


            </Col>
        </Row>
    </Container>
  )
}

export default PanelProfileFormsComponent