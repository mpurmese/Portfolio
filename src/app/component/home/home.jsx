"use client"

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "@/app/css/home.css";
import { useState, useEffect } from 'react';

const Home = () => {

  const [text, setText] = useState("I'm Junior Full Stack Developer");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const eraseTimeout = setTimeout(() => {
      setIsErasing(true);
      setTimeout(() => {
        setText("I'm silinir");
        setIsErasing(false);
      }, 1000); // Silme işlemi bittikten sonra yeni metni göster
    }, 3000); // Başlangıç metnini 3 saniye göstermek

    return () => {
      clearTimeout(eraseTimeout);
    };
  }, []);

  return (
    <Container fluid className='h-100 container-custom background-img'>
      <Row className='min-vh-100 align-items-center'>
        <Col className='text-light'>
          <h1>Mehmet Pürmeşe</h1>
          <hr />
          <div className={styles.container}>
      <h1 className={isErasing ? styles.erasing : ''}>{text}</h1>
    </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
