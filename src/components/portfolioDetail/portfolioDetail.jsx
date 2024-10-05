"use client";

import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "@/css/portfolioDetail.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const PortfoloDetailComponent = () => {
  return (
    <Container fluid className='container-custom'>
      {/* Başlık ve Breadcrumb kısmı */}
      <Row className='bg-dark text-light py-3'>
        <Col className='col-12 col-lg-6 text-center text-lg-start'> 
          <h5>Hasat Zamanı Detay</h5>
        </Col>
            
        <Col className='col-12 col-lg-6 text-center text-lg-end'> 
          <Breadcrumb className='d-flex justify-content-lg-end'>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>/</Breadcrumb.Item>
            <Breadcrumb.Item>Hasat Zamanı Detay</Breadcrumb.Item>
          </Breadcrumb>            
        </Col>
      </Row>

      {/* Carousel ve Proje Detayı */}
      <Row className='mt-5'>
        <Col className='col-12 col-lg-6 d-flex justify-content-center'>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src="/images/HasatZamani.jpg" alt="image" width={600} height={500} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/images/HasatZamani-2.jpg" alt="image" width={600} height={500} />
            </SwiperSlide>
            <SwiperSlide>
             <Image src="/images/HasatZamani-3.jpg" alt="image" width={600} height={500} />
            </SwiperSlide>
            <SwiperSlide>
             <Image src="/images/HasatZamani-4.jpg" alt="image" width={600} height={500} />
            </SwiperSlide>
          </Swiper>
        </Col>

        <Col className='col-12 col-lg-6'>
          <h4>Hasat Zamanı Projesi</h4>
          <p>
            Bu siteyi okul projem için yaptım. Konunun temeli e-ticaret üzerine. Ülkede çiftçiler genellikle düşük maliyetle ürünlerini satıyorlar, bu yüzden onlara yönelik bir site oluşturdum. Site, mümkün olduğunca az komisyon alacak şekilde tasarlandı. Site hakkında daha detaylı bilgi almak isterseniz, lütfen siteye giderek bilgi edinebilirsiniz.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfoloDetailComponent;
