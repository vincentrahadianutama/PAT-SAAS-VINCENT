import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';

function Body2() {
    return (
        <div>
            <h1 className="text-center my-4">Kemitraan</h1>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="https://smktibazma.sch.id/static/media/pertamina-logo.0f8b5fe2cf85d7513ea7.png" style={{ height: '150px', width: '400px', margin: 'auto', paddingTop: '20px' }} />
                            <Card.Body>
                                <Card.Title>Pertamina</Card.Title>
                                <Card.Text>
                                    PT Pertamina (Persero) adalah sebuah badan usaha milik negara Indonesia yang terutama bergerak di bidang minyak dan gas.
                                </Card.Text>
                                <Button variant="primary" href='https://www.pertamina.com/'>Info</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2ZUKfwZNvG_geGg2_EC81AkrF1hqHOhpexHIdQ0DzGCE5DGrItDn0rGBsZI2hEESvlcAZ-vwmwAzn_2scB7RpgkHzGnpgUyuAhQnQnMEZ26cljsPjHMdlyDX-yGCTE89QDJGj5eEMoFGjXSiFSzRQ8NqvxRvv3TO9CmkkA7zsTmhRPuR3ASXoTj_1/s320/GKL18_Universitas%20Pertamina%20-%20Koleksilogo.com.jpg" style={{ height: '150px', width: 'auto', margin: 'auto', paddingTop: '20px' }} />
                            <Card.Body>
                                <Card.Title>Universitas Pertamina</Card.Title>
                                <Card.Text>
                                    Universitas Pertamina merupakan wujud kontribusi PT Pertamina (Persero) kepada masyarakat dengan semangat menjadi perguruan tinggi berkelas dunia di bidang bisnis dan teknologi energi.
                                </Card.Text>
                                <Button variant="primary" href='https://universitaspertamina.ac.id/'>Info</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="https://smktibazma.sch.id/static/media/elnusa-logo.d84e16ea60ac7c8bb895.png" style={{ height: '150px', width: 'auto', margin: 'auto', paddingTop: '20px' }} />
                            <Card.Body>
                                <Card.Title>Elnusa</Card.Title>
                                <Card.Text>
                                    Elnusa adalah bagian dari afiliasi Pertamina, pemegang saham pengendali Elnusa memberikan konstribusi yang sangat besar atas keberadaan Elnusa saat ini. Elnusa memiliki 40 tahun lebih pengalaman di industri jasa migas dengan klien baik perusahaan nasional maupun internasional.
                                </Card.Text>
                                <Button variant="primary" href='https://www.elnusa.co.id/'>Info</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="https://smktibazma.sch.id/static/media/tugu-mandiri-logo.8d36408c969d0f8c5dec.png" style={{ height: '150px', width: 'auto', margin: 'auto', paddingTop: '20px' }} />
                            <Card.Body>
                                <Card.Title>Tugu Mandiri</Card.Title>
                                <Card.Text>
                                    Tugu Insurance merupakan perusahaan asuransi umum yang berkantor pusat di Jakarta. Dilihat berdasarkan jumlah anggaran dasar perusahaan, Tugu Insurance memiliki ruang lingkup kegiatan di sektor industri asuransi umum, reasuransi, dan bisnis syariah.
                                </Card.Text>
                                <Button variant="primary" href='http://www.tugu-digitalassistant.com/'>Info</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Body2;
