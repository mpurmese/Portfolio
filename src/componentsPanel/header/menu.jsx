"use client"

import Link from 'next/link';
import React from 'react'
import { Accordion, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { BsFillBuildingFill , BsPersonSquare, BsBook, BsImages, BsFileEarmarkRichtext, BsEnvelopeAt,BsPersonVcard  } from "react-icons/bs";
import "@/css/panel.css";

const PanelMenuComponent = () => {
  return (
    <Navbar variant="dark mt-4 ms-3">
      <Container>
        <Row>
          <Col>
            <Nav className="panel-custom-nav flex-column gap-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1" className="custom-accordion-item">
                  <Accordion.Header className="custom-accordion-header d-flex align-items-center ">
                    <BsPersonVcard className="me-2" />
                    <span className="fs-5">Profil</span>
                  </Accordion.Header>
                  <Accordion.Body> <Link href="/panel/profile"className="custom-accordion-body text-decoration-none text-dark"> Profil </Link> </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1" className="custom-accordion-item">
                  <Accordion.Header className="custom-accordion-header d-flex align-items-center ">
                    <BsPersonSquare className="me-2" />
                    <span className="fs-5">Hakkımda</span>
                  </Accordion.Header>
                  <Accordion.Body> <Link href="/panel/talent"className="custom-accordion-body text-decoration-none text-dark"> Yetenekler </Link> </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="2" className="custom-accordion-item">
                  <Accordion.Header className="custom-accordion-header d-flex align-items-center">
                    <BsFileEarmarkRichtext className="me-2" />
                    <span className="fs-5">Cv</span>
                  </Accordion.Header>
                  <Accordion.Body> <Link href="/panel/resume"className="custom-accordion-body text-decoration-none text-dark"> Cv </Link> </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="3" className="custom-accordion-item">
                  <Accordion.Header className="custom-accordion-header d-flex align-items-center">
                    <BsImages className="me-2" />
                    <span className="fs-5">Portfolio</span>
                  </Accordion.Header>
                  <Accordion.Body> <Link href="/panel/portfolio"className="custom-accordion-body text-decoration-none text-dark"> Portfolio </Link> </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="4" className="custom-accordion-item">
                  <Accordion.Header className="custom-accordion-header d-flex align-items-center">
                    <BsBook className="me-2" />
                      <span className="fs-5">Yazı</span>
                    </Accordion.Header>
                      <Accordion.Body> <Link href="/panel/articles"className="custom-accordion-body text-decoration-none text-dark"> Yazı </Link> </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="4" className="custom-accordion-item">
                  <Accordion.Header className="custom-accordion-header d-flex align-items-center">
                    <BsFillBuildingFill  className="me-2" />
                      <span className="fs-5">Sayfalar</span>
                    </Accordion.Header>
                      <Accordion.Body> <Link href="/panel/pages/home"className="custom-accordion-body text-decoration-none text-dark"> Anasayfa </Link> </Accordion.Body>
                      <Accordion.Body> <Link href="/panel/pages/abount"className="custom-accordion-body text-decoration-none text-dark"> Hakkımda </Link> </Accordion.Body>
                      <Accordion.Body> <Link href="/panel/pages/portfolyo"className="custom-accordion-body text-decoration-none text-dark"> Portfolyo </Link> </Accordion.Body>
                      <Accordion.Body> <Link href="/panel/pages/articles"className="custom-accordion-body text-decoration-none text-dark"> Yazılar </Link> </Accordion.Body>
                      <Accordion.Body> <Link href="/panel/pages/contact"className="custom-accordion-body text-decoration-none text-dark"> İletişim </Link> </Accordion.Body>
                      </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="5" className="custom-accordion-item">
                  <Accordion.Header className="custom-accordion-header d-flex align-items-center">
                    <BsEnvelopeAt className="me-2" />
                    <span className="fs-5">İletişim</span>
                  </Accordion.Header>
                  <Accordion.Body> <Link href="/panel/contact"className="custom-accordion-body text-decoration-none text-dark"> İletişim </Link> </Accordion.Body>
                  </Accordion.Item>
              </Accordion>

            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default PanelMenuComponent;
