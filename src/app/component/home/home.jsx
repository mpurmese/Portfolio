import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "@/app/css/home.css";

const Home = () => {
  return (
    <Container fluid className='h-100 container-custom background-img'>
      <Row className='min-vh-100 align-items-center'>
        <Col className='text-light'>
          <h1>Mehmet Pürmeşe</h1>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
