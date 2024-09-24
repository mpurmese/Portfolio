import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelTableComponent from './table'

const PanelTalentComponent = () => {
  return (
    <Container fluid className='panel-container-custom'>
        <Row>
            <Col>
                <PanelTableComponent/>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelTalentComponent