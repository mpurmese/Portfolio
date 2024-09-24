"use client"

import React from 'react'
import { Button, Col, Container,Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PanelFormsComponent = () => {
  return (
    <Container >

        <Row className='bg-white mt-5 mt-lg-4 shadow border'>
            <Col className='col-12 col-lg-6 mt-4  '>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Başlık</InputGroup.Text>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">E-Posta</InputGroup.Text>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Destek Saatleri</InputGroup.Text>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>

            </Col>

            <Col className='col-12 col-lg-6 mt-0 mt-lg-4'>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Diplama</InputGroup.Text>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Mutlu Müşteriler</InputGroup.Text>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
       
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Proje</InputGroup.Text>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>            
            </Col>

                <Row className='mb-4'>
                    <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Açıklama 1</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>   

                    
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Açıklama 2</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup> 

                    
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Resim </InputGroup.Text>
                        <Form.Control
                            type="file"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup> 

                    <Button variant="dark">Kaydet</Button>


                    </Col>
                </Row>

        </Row>
    </Container>
  )
}

export default PanelFormsComponent