import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { BsTrash3,BsRepeat,BsPlusCircle   } from "react-icons/bs";


const PanelArticlesTableComponent = () => {
  return (
    <Container>

        <Row className='bg-white p-3 mt-5 mt-lg-4 shadow border'>

        <Row className='mt-3'>
            <Col>
                <Button><BsPlusCircle className='me-2' />Yeni Ekle</Button>
            </Col>
        </Row>
        
            <Col className='mt-4'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Başlık</th>
                        <th>Düzenle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Yazılım Nedir?</td>
                            <td>
                                <Button className='me-2'><BsRepeat /></Button>
                                <Button variant="danger"><BsTrash3 /></Button>                            
                            </td>
                        </tr>
                    </tbody>
                </Table>      
            </Col>
        </Row>
    </Container>
  )
}

export default PanelArticlesTableComponent