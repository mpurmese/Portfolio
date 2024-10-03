"use client"

import React from 'react'
import { Button, Col, Container,Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PanelPagePortfolioFormsComponent = () => {
  return (
    <Container fluid >
        <Row className='bg-white mt-lg-4 shadow border'>
            <Col className='my-4'>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Yazı</InputGroup.Text>
                    <Form.Control
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

export default PanelPagePortfolioFormsComponent