"use client"

import React from 'react'
import HeaderImage from './image'
import HeaderName from './name'
import HeaderSocialMedia from './social-media'
import Menu from './menu'
import { Offcanvas, Button } from 'react-bootstrap'
import { BsJustify } from "react-icons/bs";


const Header = () => {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      {/* lg ekranlardan sonra sabit header */}
      <header className='bg-custom col-lg-2 vh-100 text-light d-none d-lg-block position-fixed' >
        <HeaderImage />
        <HeaderName />
        <HeaderSocialMedia />
        <Menu />
      </header>

      {/* Mobil ve tablet için offcanvas */}
      <Button className="d-lg-none position-fixed top-0 end-0 m-3 bg-custom" onClick={handleShow}>
         <BsJustify />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="start" className='bg-custom text-light' style={{ width: '70%' }}>
        <Offcanvas.Header className='bg-light' closeButton>
          <Offcanvas.Title className='text-dark fw-bold' >Menü</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <HeaderImage />
          <HeaderName />
          <HeaderSocialMedia />
          <Menu />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
