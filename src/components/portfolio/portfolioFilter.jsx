import React from 'react'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap'
import "@/css/portfolio.css";


const PortfolioFilter = () => {
  return (
    <Container>
        <Row>
            <Col className='text-center mt-4'>
            <ButtonGroup aria-label="Basic example" >
                <Button className='portfolio-btn text-dark'>All</Button>
                <Button className='portfolio-btn text-dark'>WordPress</Button>
                <Button className='portfolio-btn text-dark'>Yazılım</Button>
            </ButtonGroup>
            </Col>
        </Row>
    </Container>
  )
}

export default PortfolioFilter