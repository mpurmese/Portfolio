"use client";

import React, { useState } from "react";
import { Button, Col, Container, Dropdown, DropdownButton, Offcanvas, Row } from "react-bootstrap";
import { FaBars } from "react-icons/fa"; // Hamburger menüsü için ikon
import { BsXCircle, BsPersonFill } from "react-icons/bs";
import PanelMenuComponent from "./menu";


const PanelHeaderComponent = () => {
  const [show, setShow] = useState(true); // Başlangıçta açık olacak şekilde ayarladık

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className=" ">
      <Row className="bg-dark py-2">
        <Col className=" col-4 d-flex justify-content-start align-items-center ps-5 ">
          {/* Hamburger menü ikonu */}
          {!show && (
            <div className="text-light d-flex align-items-center gap-4">
              <Button className="bg-custom border-0 p-3 order-2" onClick={handleShow}>
                <FaBars /> {/* Hamburger ikonu */}            
              </Button>
              <h4 className="order-1">Yönetim Paneli</h4>
            </div>
            
          )}

          {/* Offcanvas */}
          <Offcanvas
            show={show}
            onHide={handleClose}
            backdrop={false} // Backdrop devre dışı bırakıldı
            scroll={true}    // Sayfanın kaydırılabilir olmasını sağlar
           className="bg-custom" style={{width:"17%"}}>

            <Offcanvas.Header>
            {/* Sağ tarafa yerleştirilmiş kapama butonu */}
            <Button
                  className="bg-light border-0"
                  onClick={handleClose}
                  style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  padding:"7px"
                  }}
              >
             <FaBars className="text-dark" size={25} />
            </Button>

            </Offcanvas.Header>
            <Offcanvas.Body>
               <PanelMenuComponent/>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>

        <Col className='col-4-8 d-flex justify-content-end pe-5 align-items-center '>
          <DropdownButton  id="dropdown-basic-button" title={<BsPersonFill className="me-2 fs-3" />}>
          <Dropdown.Item href="#/action-1" className="d-flex align-items-center gap-2 fs-5" style={{padding:"0px"}}>
                <BsPersonFill className="ms-3" /> <h5>Ayarlar</h5>
            </Dropdown.Item>

            <Dropdown.Item href="#/action-1" className="d-flex align-items-center gap-2 fs-5" style={{padding:"0px"}}>
               <BsXCircle className="ms-3" /> <h5>Çıkış</h5>
            </Dropdown.Item>
          </DropdownButton>
        </Col>
        
      </Row>
    </Container>
  );
};

export default PanelHeaderComponent;
