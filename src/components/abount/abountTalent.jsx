import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';



const AbountTalent = () => {
  const now = 60;

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>Aşağıdaki alanlarda kendime güveniyorum ve bu konularda yetkinim. Ancak, junior bir yazılımcı olarak bilmediğim konularda her zaman öğrenmeye ve kendimi geliştirmeye açığım. Sürekli olarak yeni bilgiler edinmek ve becerilerimi artırmak için çalışıyorum. </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />    
            
            <p className='mt-3'>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />    

            <p className='mt-3'>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />    

            <p className='mt-3'>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />    

            <p className='mt-3'>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />    

            <p className='mt-3'>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />    
             
          </Col>

          <Col>
            <p>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />    

            <p className='mt-3'>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />  

            <p className='mt-3'>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />  

            <p className='mt-3'>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />  

            <p className='mt-3'>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />  

            <p className='mt-3'>HTML</p>
            <ProgressBar now={now} label={`${now}%`} />  
             
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AbountTalent