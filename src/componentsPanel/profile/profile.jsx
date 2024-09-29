import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelProfileFormsComponent from './forms'

const PanelProfileComponent = () => {
  return (
    <Container fluid className='panel-container-custom'>
        <Row>
            <Col>
                <PanelProfileFormsComponent/>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelProfileComponent