import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";

function NavigationBar() {
    return (
        <Container>
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
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Company</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Career</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Donation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-6">PPDB</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default NavigationBar;
