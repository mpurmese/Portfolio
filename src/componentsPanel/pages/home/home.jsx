import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelPageHomeFormsComponent from './forms'
import SeoModule from '@/componentsPanel/seoModule/seoModule'

const PanelPageHomeComponent = () => {
  return (
    <Container fluid className='panel-container-custom'>
        <Row>
            <Col>
                <PanelPageHomeFormsComponent/>
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

export default PanelPageHomeComponent