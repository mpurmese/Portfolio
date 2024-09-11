"use client"

import Image from 'next/image';
import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { BsCodeSquare } from "react-icons/bs";

const ContactLeft = () => {
  return (
    <Container>
    <Row>
        <Col className='p-4 border shadow mb-5 bg-white text-center fs-1'>
           <BsCodeSquare/>
        </Col>    
    </Row>
</Container>
  )
}

export default ContactLeft