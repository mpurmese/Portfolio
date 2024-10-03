import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelAbountFormsComponent from './forms'
import SeoModule from '@/componentsPanel/seoModule/seoModule'

const PanelAbountComponent = () => {
  return (
    <Container fluid className='panel-container-custom' > 
        <Row>
            <Col>
                <PanelAbountFormsComponent/>
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

export default PanelAbountComponent