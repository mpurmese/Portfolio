import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelSeoModuleComponent from './forms'

const SeoModule = () => {
  return (
    <Container>
        <Row>
            <Col>
                <PanelSeoModuleComponent/>
            </Col>
        </Row>
    </Container>
  )
}

export default SeoModule