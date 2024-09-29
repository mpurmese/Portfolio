import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelAbountFormsComponent from './forms'

const PanelAbountComponent = () => {
  return (
    <Container fluid className='panel-container-custom' > 
        <Row>
            <Col>
                <PanelAbountFormsComponent/>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelAbountComponent