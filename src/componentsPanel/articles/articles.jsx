import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PanelArticlesTableComponent from './table'

const PanelArticles = () => {
  return (
    <Container fluid className='panel-container-custom'>
        <Row>
            <Col>
                <PanelArticlesTableComponent/>
            </Col>
        </Row>
    </Container>
  )
}

export default PanelArticles