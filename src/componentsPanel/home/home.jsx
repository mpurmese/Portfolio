"use client"

import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsEye } from "react-icons/bs";


const PanelHomeComponnet = () => {
  return (
    <Container fluid className='panel-container-custom pt-4'>
        <Row className='ps-5'>
            <Col>
                <Card style={{ width: '18rem' }} className='shadow'>
                    <Card.Body className='text-center '>
                        <Card.Title className='fs-2 text-custom'><BsEye /></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted fs-4 text-dark">Portfolio</Card.Subtitle>
                        <Card.Text className='fs-4'>
                        Toplam Portfolio: 5
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelHomeComponnet