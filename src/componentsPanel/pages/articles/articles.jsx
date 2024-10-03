import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelPageArticlesFormsComponent from './forms'
import SeoModule from '@/componentsPanel/seoModule/seoModule'

const PanelPageArticlesComponent = () => {
  return (
    <Container fluid className='panel-container-custom'>
        <Row>
            <Col>
                <PanelPageArticlesFormsComponent/>
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

export default PanelPageArticlesComponent