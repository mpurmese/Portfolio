import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { BsTrash3 } from "react-icons/bs";


const PanelContactTableComponent = () => {
  return (
    <Container>

        <Row className='bg-white p-3 mt-5 mt-lg-4 shadow border'>
        
            <Col className='mt-4'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Adı Soyadı</th>
                        <th>E-Mail</th>
                        <th>Konu</th>
                        <th>Mesaj</th>
                        <th>Düzzenle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mehmet Pürmeşe</td>
                            <td>mpurmese@gmail.com</td>
                            <td>Güzel Bir Konu</td>
                            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat corporis expedita numquam doloremque necessitatibus ducimus dolorum dolorem odio, eligendi voluptate quisquam explicabo perferendis dignissimos sit aspernatur repellendus minus provident!</td>
                            <td>
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

export default PanelContactTableComponent