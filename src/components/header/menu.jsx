"use client"

import Link from 'next/link';
import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { BsHouse, BsPersonSquare, BsBook, BsImages, BsFileEarmarkRichtext, BsEnvelopeAt    } from "react-icons/bs";
import "@/css/header.css"


const Menu = () => {
  return (
    <Navbar variant="dark mt-4 ms-3 ">
      <Container>
        <Row>
          <Col>
              <Nav className="flex-column gap-3 fs-5">
                <Link href="/" className='d-flex align-items-center gap-3 custom-nav text-light'><BsHouse /> Anasayfa</Link>
                <Link href="/abount" className='d-flex align-items-center gap-3 custom-nav text-light'><BsPersonSquare /> Hakkımda</Link>
                <Link href="/resume" className='d-flex align-items-center gap-3 custom-nav text-light'><BsFileEarmarkRichtext /> Cv</Link>
                <Link href="" className='d-flex align-items-center gap-3 custom-nav text-light'><BsImages /> Portfolio</Link>
                <Link href="" className='d-flex align-items-center gap-3 custom-nav text-light'><BsBook /> Yazı</Link>
                <Link href="" className='d-flex align-items-center gap-3 custom-nav text-light'><BsEnvelopeAt /> İletişim</Link>
              </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default Menu
