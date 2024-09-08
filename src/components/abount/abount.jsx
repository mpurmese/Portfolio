import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AbountImage from './abountImage'
import AbountTexts from './abountTexts'
import AbountIcons from './abountIcons'
import AbountTalent from './AbountTalent'

const AbountComponent = () => {
  return (
    <>
    <Container fluid className='container-custom h-100'>
        <Row>
            <Col>
                <h1>Hakkımda</h1>
                <hr />
            </Col>
        </Row>
        <Row className='mt-4 align-items-center'>
            <Col className='col-4'>
                <AbountImage/>
            </Col>
            <Col className='col-8'>
                <AbountTexts/>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <AbountIcons/>
            </Col>
        </Row>
    </Container>

    <Container fluid className='container-custom bg-custom2'>
        <Row>
            <Col>
            <h1>Yetenekler</h1>
            <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <AbountTalent/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default AbountComponent