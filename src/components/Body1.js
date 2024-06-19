import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Body1() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Islamic Boarding School SMK TI BAZMA</h1>
                    <p>Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.

                        SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh selama 4 tahun dengan siswa-siswa yang berasal dari berbagai daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum berbasis asrama.</p>
                    <Button variant="primary" href='https://smktibazma.sch.id/about'>Info selengkapnya</Button>{' '}
                </Col>
                <Col>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/UPubaRIRWkA?si=N3ksNWLosVSZISk" allowFullScreen title="Video SMK TI BAZMA" width={570} height={300}></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Body1;
