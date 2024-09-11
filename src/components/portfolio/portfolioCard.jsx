"use client"

import React from 'react';
import { Card, Col, Container, Row, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Image from 'next/image';
import { BsZoomIn, BsLink45Deg } from "react-icons/bs";
import "@/css/portfolio.css";

const PortfolioCard = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Row className='mt-5 grid'>
        <Col className='col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4'>
          <Card className='position-relative overflow-hidden portfolio-card' style={{ width: '24rem', height: '20rem' }}>
            {/* Görsel */}
            <Image src="/images/HasatZamani.jpg" height={300} width={400} alt='hasatzamani' className='w-100 h-100' />

            {/* Karanlık arka plan ve içerik */}
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between align-items-center">
              <div className=' text-light position-absolute top-0 start-0 m-3 bg-custom3 p-1'>Hasat Zamanı</div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <BsZoomIn className="fs-2 me-3 text-light position-absolute zoom " onClick={() => setShow(true)} />
                <BsLink45Deg className="fs-2 text-light position-absolute link" />
              </div>
              <div className="fw-bold text-light mb-3">E-Ticaret</div>
            </div>
          </Card>

          {/* Modal */}
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Hasat Zamanı Detay
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src="/images/HasatZamani.jpg" height={300} width={400} alt='hasatzamani' />
            </Modal.Body>
          </Modal>
        </Col>  

        <Col className='col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4'>
          <Card className='position-relative overflow-hidden portfolio-card' style={{ width: '24rem', height: '20rem' }}>
            {/* Görsel */}
            <Image src="/images/HasatZamani.jpg" height={300} width={400} alt='hasatzamani' className='w-100 h-100' />

            {/* Karanlık arka plan ve içerik */}
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between align-items-center">
              <div className=' text-light position-absolute top-0 start-0 m-3 bg-custom3 p-1'>Hasat Zamanı</div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <BsZoomIn className="fs-2 me-3 text-light position-absolute zoom " onClick={() => setShow(true)} />
                <BsLink45Deg className="fs-2 text-light position-absolute link" />
              </div>
              <div className="fw-bold text-light mb-3">E-Ticaret</div>
            </div>
          </Card>

          {/* Modal */}
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Hasat Zamanı Detay
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src="/images/HasatZamani.jpg" height={300} width={400} alt='hasatzamani' />
            </Modal.Body>
          </Modal>
        </Col>  

        <Col className='col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4'>
          <Card className='position-relative overflow-hidden portfolio-card' style={{ width: '24rem', height: '20rem' }}>
            {/* Görsel */}
            <Image src="/images/HasatZamani.jpg" height={300} width={400} alt='hasatzamani' className='w-100 h-100' />

            {/* Karanlık arka plan ve içerik */}
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between align-items-center">
              <div className=' text-light position-absolute top-0 start-0 m-3 bg-custom3 p-1'>Hasat Zamanı</div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <BsZoomIn className="fs-2 me-3 text-light position-absolute zoom " onClick={() => setShow(true)} />
                <BsLink45Deg className="fs-2 text-light position-absolute link" />
              </div>
              <div className="fw-bold text-light mb-3">E-Ticaret</div>
            </div>
          </Card>

          {/* Modal */}
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Hasat Zamanı Detay
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src="/images/HasatZamani.jpg" height={300} width={400} alt='hasatzamani' />
            </Modal.Body>
          </Modal>
        </Col>  

        

      </Row>
    </Container>
  );
}

export default PortfolioCard;
