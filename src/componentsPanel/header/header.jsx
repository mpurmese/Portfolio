"use client"

import React from 'react'
import Menu from './menu'
import { Offcanvas, Button } from 'react-bootstrap'
import { BsJustify } from "react-icons/bs";
import Link from 'next/link';


const PanelHeaderComponent = () => {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      {/* lg ekranlardan sonra sabit header */}
      <header className='bg-white shadow border col-lg-2 vh-100 text-light d-none d-lg-block position-fixed text-center' >  
        <Link href="/panel" className='text-decoration-none'> <h2 className='mt-4 text-dark'>Yönetim Paneli</h2> </Link>
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
        <h1>Yönetim Paneli</h1>
          <Menu />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default PanelHeaderComponent
