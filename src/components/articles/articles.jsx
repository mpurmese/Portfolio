import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArticlesTexts from './articlesTexts'
import ArticlesCard from './articlesCard'

const ArticlesComponents = () => {
  return (
    <Container fluid className='container-custom h-100'>
        <Row>
            <Col>
                <h1>Yazılar</h1>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <ArticlesTexts/>
            </Col>
        </Row>
        <Row>
            <Col>
                <ArticlesCard/>
            </Col>
        </Row>
    </Container>
  )
}

export default ArticlesComponents
