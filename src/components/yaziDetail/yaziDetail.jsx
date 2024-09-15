"use client"

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "@/css/yaziDetail.css"



const YaziDetailComponent = () => {
  return (
    <Container fluid className='container-custom' >
        <Row className='bg-dark deneme text-light py-3' >
            <Col className='col-12 col-lg-6 text-center text-lg-start'> 
              <h5>WordPress Nedir? SEO Dostu Bir İçerik Yönetim Sistemi</h5>
            </Col>
            
            <Col className='col-12 col-lg-6 text-center text-lg-end'> 
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>/</Breadcrumb.Item>
                <Breadcrumb.Item>WordPress Nedir? SEO Dostu Bir İçerik Yönetim Sistemi</Breadcrumb.Item>
              </Breadcrumb>            
            </Col>
        </Row>

        <Row className='mt-5'>
            <Col className='col-12 col-lg-6 d-flex justify-content-center  '>
               <Image src="/images/Wordpres-nedir.png" alt="image" width={600} height={500} />
            </Col>
       
          <Col className='col-12 col-lg-6'>
            <h4>WordPress Nedir? SEO Dostu Bir İçerik Yönetim Sistemi</h4>
            <p>WordPress, dünya çapında milyonlarca web sitesinin ve blogun temelini oluşturan popüler bir açık kaynak içerik yönetim sistemidir (CMS). Kullanıcı dostu arayüzü, esnek yapısı ve geniş eklenti desteği ile SEO dostu bir web sitesi oluşturmanıza yardımcı olur.</p>
          <br />
          <p>WordPress, 2003 yılında Matt Mullenweg ve Mike Little tarafından geliştirilen açık kaynaklı bir içerik yönetim sistemidir. Web siteleri ve bloglar oluşturmak için kullanılan bu platform, kullanıcı dostu arayüzü ve geniş özelleştirme seçenekleriyle öne çıkar. Hem bireysel hem de kurumsal kullanıcılar için ideal bir çözüm sunar.</p>
          </Col>
        </Row>

        <Row>
          <Col className='col-12'>
            <p>SEO Dostu Özellikler:
SEO Eklentileri: WordPress, SEO iyileştirmeleri için Yoast SEO ve All in One SEO Pack gibi popüler eklentileri destekler. Bu eklentiler, anahtar kelime optimizasyonu, meta açıklamalar ve site haritaları gibi SEO öğelerini yönetmenizi sağlar.
Mobil Uyumlu Temalar: WordPress temaları genellikle mobil uyumludur. Mobil uyumlu bir web sitesi, Google'ın arama algoritmalarında daha yüksek sıralamalar elde etmenize yardımcı olabilir.
Hız ve Performans: WordPress, hızlı yükleme süreleri ve performans iyileştirmeleri için çeşitli önbellekleme eklentileri ve optimizasyon araçları sunar. Hızlı yüklenen siteler, kullanıcı deneyimini artırır ve SEO sıralamalarını olumlu yönde etkiler.
SEO Dostu URL'ler: WordPress, SEO dostu URL yapıları oluşturmanıza olanak tanır. Bu, arama motorlarının sayfalarınızı daha iyi anlamasını ve sıralamasını kolaylaştırır.
İçerik Yönetimi: WordPress’in kolay içerik düzenleme araçları, SEO uyumlu içerikler oluşturmanızı destekler. Başlıklar, alt başlıklar ve meta açıklamalar gibi SEO öğelerini kolayca ekleyebilirsiniz.
Site Haritaları ve Robots.txt: WordPress, arama motorlarının sitenizi taramasına yardımcı olmak için site haritaları oluşturmanıza ve robots.txt dosyası yönetmenize olanak tanır.


WordPress Ne Değildir?
Bir Kodlama Aracı Değildir: WordPress, kodlama bilgisi gerektirmeden web sitenizi yönetmenizi sağlar. Ancak, özel özellikler eklemek için bazı kodlama bilgisi gerekebilir.
Sadece Blog Platformu Değildir: İlk başta bir blog platformu olarak bilinse de, günümüzde kurumsal sitelerden e-ticaret sitelerine kadar çeşitli web siteleri için kullanılabilir.
Ücretli Değildir: WordPress yazılımı kendisi ücretsizdir. Ancak, özel temalar, eklentiler ve hosting gibi ek hizmetler ücretli olabilir.


Sonuç
WordPress, SEO dostu özellikleri sayesinde web sitenizin arama motorlarında daha iyi sıralamalar elde etmesini sağlar. Kullanıcı dostu arayüzü ve geniş özelleştirme seçenekleri ile hem yeni başlayanlar hem de deneyimli web yöneticileri için mükemmel bir içerik yönetim sistemidir.</p>
          </Col>
        </Row>
    </Container>
  )
}

export default YaziDetailComponent