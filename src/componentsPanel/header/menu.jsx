"use client"

import Link from 'next/link';
import React from 'react'
import { Accordion, Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { BsHouse, BsPersonSquare, BsBook, BsImages, BsFileEarmarkRichtext, BsEnvelopeAt } from "react-icons/bs";
import "@/css/panel.css";

const PanelMenuComponent = () => {
  return (
    <Navbar variant="dark mt-4 ms-3">
      <Container>
        <Row>
          <Col>
            <Nav className="flex-column gap-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1" className="custom-accordion-item">
                  <Accordion.Header className="custom-accordion-header d-flex align-items-center ">
                    <BsPersonSquare className="me-2" />
                    <span className="fs-5">Hakkımda</span>
                  </Accordion.Header>
                  <Accordion.Body> <Link href="/panel/abount"className="custom-accordion-body text-decoration-none text-dark"> Hakkımda </Link> </Accordion.Body>
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
                  <Accordion.Body className="custom-accordion-body">Yazı</Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="5" className="custom-accordion-item">
                  <Accordion.Header className="custom-accordion-header d-flex align-items-center">
                    <BsEnvelopeAt className="me-2" />
                    <span className="fs-5">İletişim</span>
                  </Accordion.Header>
                  <Accordion.Body className="custom-accordion-body">İletişim</Accordion.Body>
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
