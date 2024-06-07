import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";

function NavigationBar() {
    return (
        <Container className="shadow-bottom">
            <Row className="align-items-center">
                <Col xs={6} md={4}>
                    <Image
                        src="https://res.cloudinary.com/dhyq9uts4/image/upload/v1676360444/logo_v09np1.png"
                        rounded
                        fluid
                    />
                </Col>
                <Col xs={6} md={8}>
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Beranda</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Tentang</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Kemitraan</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Testimoni</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5">Kontak</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default NavigationBar;
