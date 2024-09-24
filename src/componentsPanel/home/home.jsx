"use client"

import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsEye, BsJournalBookmarkFill } from "react-icons/bs";
import "@/css/panel.css"

const PanelHomeComponnet = () => {
  return (
    <Container fluid className='panel-container-custom pt-5 pt-md-4'>
        <Row className='justify-content-start align-items-start'> {/* Burada row'u ortalamak için sınıflar ekledik */}
            <Col className='col-12 col-md-4 col-lg-3   d-flex justify-content-center my-3'> {/* Kartlar arasında boşluk için my-3 eklendi */}
                <Card style={{ width: '18rem' }} className='shadow'>
                    <Card.Body className='text-center'>
                        <Card.Title className='anasayfa-icon fs-2 text-custom'><BsEye /></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted fs-4 text-dark mt-2">Portfolio</Card.Subtitle>
                        <Card.Text className='fs-4'>
                        Toplam Portfolio: 5
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col className='col-12 col-md-4 col-lg-3 d-flex justify-content-center my-3'> {/* Kartlar arasında boşluk için my-3 eklendi */}
                <Card style={{ width: '18rem' }} className='shadow'>
                    <Card.Body className='text-center'>
                        <Card.Title className='anasayfa-icon fs-2 text-custom'><BsJournalBookmarkFill /></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted fs-4 text-dark mt-2">Yazılar</Card.Subtitle>
                        <Card.Text className='fs-4'>
                        Toplam Yazı: 5
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelHomeComponnet
