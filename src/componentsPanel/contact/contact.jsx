import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelContactTableComponent from './table'

const PanelContactComponent = () => {
  return (
    <Container fluid className='panel-container-custom'> 
        <Row>
            <Col>
                <PanelContactTableComponent/>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelContactComponent