import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "@/css/resume.css"

const ResumeModel = () => {
  return (
    <Container>
        <Row className='mt-5'>
            <Col className='col-12 col-md-6'>
                <div className="resume-model">
                    <h4 className='fw-bold'>Kısaca</h4>
                    <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                        <h4>Mehmet Pürmeşe</h4>
                        <p>İstanbul / Maltepe</p>
                        <p>Yazılım öğrenmeye yeni başlayan bir geliştirici olarak hem frontend hem de backend alanında uzmanlaşmaya çalışıyorum.</p>
                        <ul>
                            <li>mpurmese@yandex.com</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </Col>

            <Col className='col-12 col-md-6 mt-3 mt-md-0 '>
                <div className="resume-model">
                    <h4 className='fw-bold'>Sertfikalar</h4>
                    <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                        <h4>TechPro Education</h4>
                        <p>2024</p>
                        <p>Full Stack Java Developer</p>
                        </div>
                    </div>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className='mt-5 '>
            <Col className='col-12 col-md-6'>
                <div className="resume-model">
                    <h4 className='fw-bold'>Eğitim</h4>
                    <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                        <h4>Beykoz Üniversitesi - E-Ticaret Ve Pazarlama (Ön Lisans)</h4>
                        <p>2022 - 2024</p>
                        <h4>Şehit Öğretmen Hüseyin Ağırman Mesleki ve Teknik Anadolu Lises (Web Tasarım)</h4>
                        <p>2021</p>
                        <p>İstanbul / Kartal</p>
                        <p>Yazılımla ilk olarak burada tanıştım, ancak pandemi yüzünden pek fazla şey öğrenemedik. Sonrasında uzun bir süre yazılıma ara vermek zorunda kaldım.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </Col>

            <Col className='col-12 col-md-6 mt-3 mt-md-0'>
                <div className="resume-model">
                    <h4 className='fw-bold'>Deneyim</h4>
                    <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                        <h4>Pars Analitik - Pazarlama Yardımcısı</h4>
                        <p>Temmuz 2021 - Günümüz</p>
                        <p>İstanbul / Maltepe</p>
                        <p>
                            Pazarlama yardımcısı olarak 3 senedir çalışıyorum. Yaptığım işler arasında CRM'e veri girişi, mail sistemimize bilgilerin girilmesi ve 
                            mailing yapılması, WordPress tabanlı sitelerin düzenlenmesi ve yeniden yapılması, web sitesine ürün girişleri yapılması, sosyal medya 
                            paylaşımlarının hazırlanması ve yayınlanması bulunmaktadır.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </Col>

        </Row>
    </Container>
  )
}

export default ResumeModel