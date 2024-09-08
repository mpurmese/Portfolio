import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "@/css/home.css";
import AnimatedTextWord from './animatedTextWord';

const Home = () => {
  return (
    <Container fluid className='h-100 container-custom background-img'>
      <Row className='min-vh-100 align-items-center'>
        <Col className='text-light'>
          <h1>Mehmet Pürmeşe</h1>
          <hr />
          <div className="container h-screen mx-auto flex flex-col items-center justify-center">
          <AnimatedTextWord text="I'm Junıor Full Stack Developer" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
