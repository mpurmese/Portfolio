import Link from 'next/link';
import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { BsTrash3,BsRepeat,BsPlusCircle   } from "react-icons/bs";


const PanelPortfolioTableComponent = () => {
  return (
    <Container>

        <Row className='bg-white p-3 mt-5 mt-lg-4 shadow border'>

        <Row className='mt-3'>
            <Col>
                
                <Link href="/" > <Button><BsPlusCircle className='me-2' />Yeni Ekle</Button> </Link>
            </Col>
        </Row>
        
            <Col className='mt-4'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Başlık</th>
                        <th>Kategori</th>
                        <th>Düzenle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Hasat Zamanı</td>
                            <td>Wordpress</td>
                            <td>
                                <Button className='me-2'><BsRepeat /></Button>
                                <Button variant="danger"><BsTrash3 /></Button>                            
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Hasat Zamanı</td>
                            <td>Wordpress</td>
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

export default PanelPortfolioTableComponent