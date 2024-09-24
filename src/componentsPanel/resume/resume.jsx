import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelResumeFormsComponent from './forms'

const PanelResumeComponent = () => {
  return (
    <Container fluid className='panel-container-custom' > 
        <Row>
            <Col>
                <PanelResumeFormsComponent/>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelResumeComponent