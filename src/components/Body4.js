import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Body4() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Carousel>
                        <Carousel.Item>
                            <div className="d-flex flex-column align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="data:image/jpeg;base64,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"
                                    alt="First profile"
                                />
                                <div>
                                    <h3>Bayu Priyambada</h3>
                                    <p>Guru Web Development di SMK TI BAZMA</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex flex-column align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUH-fUkm60xvreQfQA7Qlt8o788_aZRC7Uyg&s"
                                    alt="Second profile"
                                />
                                <div>
                                    <h3>Ulfa Mujahidah</h3>
                                    <p>Guru Bahasa Inggris di SMK TI BAZMA</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex flex-column align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMaw-EZdoiMan9hPY2V4dFxSsphbjKtpbKA&s"
                                    alt="Third profile"
                                />
                                <div>
                                    <h3>Ratno Wijaya</h3>
                                    <p>Guru Ngaji di SMK TI BAZMA</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex flex-column align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc47L4-AlKEV41eSU5SO0llDbDPUvij8Lv1w&s"
                                    alt="Third profile"
                                />
                                <div>
                                    <h3>Muiz Ghifari</h3>
                                    <p>Guru Matematika di SMK TI BAZMA</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex flex-column align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLy4EqnErOjPOeKGOg7USeGE9_od_yoEn3A&s"
                                    alt="Third profile"
                                />
                                <div>
                                    <h3>Indra Sujitno</h3>
                                    <p>Guru PPKN di SMK TI BAZMA</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={6}>
                    <h2>Kontak Kami</h2>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan nama Anda" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Masukkan email Anda" />
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Pesan</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Masukkan pesan Anda" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Kirim
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Body4;
