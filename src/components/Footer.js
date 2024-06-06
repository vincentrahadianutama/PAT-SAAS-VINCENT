import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <Container>
                <Row>
                    <Col>
                        <p>This page created by <a href='https://www.instagram.com/vncnt_ru/'>Vincent Rahadian Utama</a>.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
