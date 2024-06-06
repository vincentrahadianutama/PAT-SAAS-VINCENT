import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Body3() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xueUBXLqTLFmnok8i1Q1f5iIo6NIV94jmQ&s" fluid />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Deskripsi 1</Card.Title>
                                <Card.Text>
                                    Ini adalah deskripsi untuk gambar pertama. Anda dapat menambahkan teks deskripsi sesuai dengan kebutuhan Anda.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5sW3TwlSNEXNIxbSJw285RIY706l3igFNA&s" fluid />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Deskripsi 2</Card.Title>
                                <Card.Text>
                                    Ini adalah deskripsi untuk gambar kedua. Anda dapat menambahkan teks deskripsi sesuai dengan kebutuhan Anda.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ35IbtrJB4O9IwBn4W5Sa6aiYszeQ09H56g&s" fluid />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Deskripsi 3</Card.Title>
                                <Card.Text>
                                    Ini adalah deskripsi untuk gambar ketiga. Anda dapat menambahkan teks deskripsi sesuai dengan kebutuhan Anda.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Col>
                
                <Col md={6}>
                    <Card>
                        <Card.Body>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5iiAu3bsoGcjUds2muIQYiQcOqY4ToMqBTQ&s" fluid />

                            <Card.Title>Konten di Sebelah Kanan</Card.Title>
                            <Card.Text>
                                Ini adalah area konten yang berada di sebelah kanan. Anda dapat menambahkan konten lainnya sesuai dengan kebutuhan Anda.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Body3;
