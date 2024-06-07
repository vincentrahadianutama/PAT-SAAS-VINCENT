import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'; // Tambahkan impor Button
import { CardText } from 'react-bootstrap';

function Body3() {
    return (
        <Container>
            <h1 className="text-center my-4">Testimoni</h1>
            <Row>
                <Col md={6}>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xueUBXLqTLFmnok8i1Q1f5iIo6NIV94jmQ&s" fluid />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Firmansyah</Card.Title>
                                <Card.Text>
                                    "Saya sangat bersyukur telah menghabiskan masa sekolah di SMK TI BAZMA. Pengalaman yang berharga dan ilmu yang diperoleh di sini akan selalu menjadi bagian tak terpisahkan dalam perjalanan hidup saya. Terima kasih kepada semua guru dan teman-teman yang telah mendukung dan menginspirasi saya selama ini!"
                                </Card.Text>
                                <Button variant="primary" href='https://www.instagram.com/fi_rmansyah5915/' className="mb-4">Kontak</Button>{' '}
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5sW3TwlSNEXNIxbSJw285RIY706l3igFNA&s" fluid />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Fadhil Rabbani</Card.Title>
                                <Card.Text>
                                    "Saya memiliki pengalaman yang luar biasa selama bersekolah di SMK TI BAZMA! Guru-gurunya sangat berdedikasi dalam memberikan pembelajaran yang berkualitas dan lingkungan sekolah yang mendukung perkembangan siswa."
                                </Card.Text>
                                <Button variant="primary" href='https://www.instagram.com/fadhil_one_/' className="mb-4">Kontak</Button>{' '}
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ35IbtrJB4O9IwBn4W5Sa6aiYszeQ09H56g&s" fluid />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Ardian Arya Putra</Card.Title>
                                <Card.Text>
                                    "Selama saya bersekolah di SMK TI BAZMA, saya merasa sangat terbantu dengan fasilitas yang memadai dan dukungan dari para guru yang berdedikasi. Pengalaman belajar di sini benar-benar mempersiapkan saya untuk menghadapi tantangan di dunia nyata. Terima kasih SMK TI BAZMA atas segala pembelajaran dan kenangan yang berharga!"
                                </Card.Text>
                                <Button variant="primary" href='https://www.instagram.com/aaardnnn/' className="mb-4">Kontak</Button>{' '}
                            </Card.Body>
                        </Col>
                    </Row>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Image src="https://media.licdn.com/dms/image/D5622AQHz-iGYR_PXIg/feedshare-shrink_800/0/1704291040483?e=2147483647&v=beta&t=3tyM7R8AofMKdZ1aoO7Q3Ob3ebJ99a05Aw5pkKp82Z4" fluid />
                            <Card.Title>Hamidzan Pranajanala Bhamakerti</Card.Title>
                            <CardText>Anak Emas SMK TI BAZMA</CardText>
                            <Button variant="primary" href='https://www.instagram.com/hmpb._/' className="mb-4">Kontak</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Body3;
