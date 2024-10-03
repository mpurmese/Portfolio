import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelPagePortfolioFormsComponent from './forms'
import SeoModule from '@/componentsPanel/seoModule/seoModule'

const PanelPagePortfolioComponent = () => {
  return (
    <Container fluid className='panel-container-custom'>
        <Row>
            <Col>
                <PanelPagePortfolioFormsComponent/>
            </Col>
        </Row>

        <Row>
            <Col>
                <SeoModule/>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelPagePortfolioComponent