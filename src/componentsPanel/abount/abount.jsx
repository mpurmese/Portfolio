import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelFormsComponent from './forms'

const PanelAbountComponent = () => {
  return (
    <Container fluid className='panel-container-custom' > 
        <Row>
            <Col>
                <PanelFormsComponent/>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelAbountComponent