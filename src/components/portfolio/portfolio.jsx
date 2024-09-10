import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortfolioText from './portfolioText'
import PortfolioCard from './portfolioCard'

const PortfolioComponent = () => {
  return (
    <Container fluid className='container-custom'>
        <Row>
            <Col>
                <h1>Portfolyo</h1>
                <hr />
            </Col>
        </Row>

        <Row>
            <Col>
                <PortfolioText/>
            </Col>
        </Row>

        <Row>
            <Col>
                <PortfolioCard/>
            </Col>
        </Row>
    </Container>
  )
}

export default PortfolioComponent