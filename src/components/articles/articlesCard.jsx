import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsBodyText } from "react-icons/bs";
import "@/css/articles.css"


const ArticlesCard = () => {
  return (
    <Container>
        <Row className='mt-4'>
            <Col className='col-12 col-md-6 mb-4'>
            <div className="d-flex align-items-start rounded">
            <div className="icon-container me-4 fs-2 text-light">
            <BsBodyText />
                </div>
                <div>
                    <h5 className="fw-bold">WordPress Nedir? SEO Dostu Bir İçerik Yönetim Sistemi</h5>
                    <p>
                    WordPress, dünya çapında milyonlarca web sitesinin ve blogun temelini
                    oluşturan popüler bir açık kaynak içerik yönetim sistemidir (CMS). Kullanıcı dostu
                    arayüzü, esnek yapısı ve geniş eklenti desteği ile SEO dostu bir web sitesi
                    oluşturmanıza yardımcı olur.
                    </p>
                </div>
            </div>
            </Col>  
        </Row>
    </Container>
  )
}

export default ArticlesCard