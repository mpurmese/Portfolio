"use client"

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "@/css/portfolioDetail.css"
import Carousel from 'react-bootstrap/Carousel';

const PortfoloDetailComponent = () => {
  return (
    <Container fluid className='container-custom' >
        <Row className='bg-dark deneme text-light py-3' >
            <Col className='col-12 col-lg-6 text-center text-lg-start'> 
                <h5>Hasat Zamanı Detay</h5>
            </Col>
                
            <Col className='col-12 col-lg-6 text-center text-lg-end'> 
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item>/</Breadcrumb.Item>
                    <Breadcrumb.Item>Hasat Zamanı Detay</Breadcrumb.Item>
                </Breadcrumb>            
            </Col>
        </Row>

        <Row className='mt-5'>
            <Col className='col-12 col-lg-6 d-flex justify-content-center  '>
                <Carousel>
                    <Carousel.Item>
                        <Image src="/images/Wordpres-nedir.png" alt="image" width={600} height={500} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image src="/images/Wordpres-nedir.png" alt="image" width={600} height={500} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image src="/images/Wordpres-nedir.png" alt="image" width={600} height={500} />
                    </Carousel.Item>
                </Carousel>
            </Col>
        
            <Col className='col-12 col-lg-6'>
                <h4>Hasat Zamanı Projesi</h4>
                <p>Bu siteyi okul projem için yaptım. Konunun temeli e-ticaret üzerine. Ülkede çiftçiler genellikle düşük maliyetle ürünlerini satıyorlar, bu yüzden onlara yönelik bir site oluşturdum. Site, mümkün olduğunca az komisyon alacak şekilde tasarlandı. Site hakkında daha detaylı bilgi almak isterseniz, lütfen siteye giderek bilgi edinebilirsiniz.</p>
            </Col>
        </Row>
    </Container>
  )
}

export default PortfoloDetailComponent