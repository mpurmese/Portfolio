import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelPageContactFormsComponent from './forms'
import SeoModule from '@/componentsPanel/seoModule/seoModule'

const PanelPageFormsComponent = () => {
  return (
    <Container fluid className='panel-container-custom'>
        <Row>
            <Col>
                <PanelPageContactFormsComponent/>
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

export default PanelPageFormsComponent