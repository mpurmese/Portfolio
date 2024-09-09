import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ResumeModel from './resumeModel'

const ResumeComponent = () => {
  return (
    <Container fluid className='container-custom'>
      <Row>
          <Col>
              <h1>Resume</h1>
              <hr />
          </Col>
      </Row>
      <Row>
        <Col>
              <ResumeModel/>
        </Col>
      </Row>
      
      
    </Container>
  )
}

export default ResumeComponent