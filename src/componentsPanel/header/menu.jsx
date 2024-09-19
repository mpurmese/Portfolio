"use client"

import React from 'react'
import { Col, Container, DropdownButton,Dropdown, Nav, Navbar, Row, Button } from 'react-bootstrap'
import { BsHouse, BsPersonSquare, BsBook, BsImages, BsFileEarmarkRichtext, BsEnvelopeAt    } from "react-icons/bs";


const PanelMenuComponent = () => {
  return (
    <Navbar variant="dark mt-4 ms-3 ">
      <Container fluid>
        <Row>
          <Col>
              <Nav className="flex-column gap-3">
              <div>
                <Button variant="bg-custom text-light border-0" className="d-flex align-items-center fs-4">
                  <BsHouse className="me-2" />
                  Anasayfa
                </Button>
              </div>

                <DropdownButton variant="bg-custom text-light border-0" id="dropdown-basic-button" title={<span className='fs-4 align-middle'><BsPersonSquare className="me-2" /> Hakkımda </span>}>
                <Dropdown.Item href="#/action-1">Düzenle</Dropdown.Item>
                </DropdownButton>

                <DropdownButton variant="bg-custom text-light border-0" id="dropdown-basic-button" title={<span className='fs-4 align-middle'><BsFileEarmarkRichtext className="me-2" /> Cv </span>}>
                <Dropdown.Item href="#/action-1">Listele</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Cv Ekle</Dropdown.Item>
                </DropdownButton>

                <DropdownButton variant="bg-custom text-light border-0" id="dropdown-basic-button" title={<span className='fs-4 align-middle'><BsImages className="me-2" /> Portfolio </span>}>
                <Dropdown.Item href="#/action-1">Listele</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Portfolio Ekle</Dropdown.Item>
                </DropdownButton>

                <DropdownButton variant="bg-custom text-light border-0" id="dropdown-basic-button" title={<span className='fs-4 align-middle'><BsBook className="me-2" /> Yazı </span>}>
                <Dropdown.Item href="#/action-1">Listele</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Yazı Ekle</Dropdown.Item>
                </DropdownButton>

                <DropdownButton variant="bg-custom text-light border-0" id="dropdown-basic-button" title={<span className='fs-4 align-middle'><BsEnvelopeAt className="me-2" /> İletişim </span>}>
                <Dropdown.Item href="#/action-1">Mesajlar</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Düzenle</Dropdown.Item>
                </DropdownButton>

              </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default PanelMenuComponent