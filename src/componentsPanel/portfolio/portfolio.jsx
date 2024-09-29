import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelPortfolioTableComponent from './table'

const PanelPortfolioComponent = () => {
  return (
    <Container fluid className='panel-container-custom'> 
      <Row>
          <Col>
            <PanelPortfolioTableComponent/>
          </Col>
      </Row>
    </Container>
  )
}

export default PanelPortfolioComponent