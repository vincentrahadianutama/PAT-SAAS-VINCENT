import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; // Menambahkan impor Card
import Button from 'react-bootstrap/Button'; // Menambahkan impor Button

function Body2() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/100x180" fluid style={{ height: '150px', width: '287px' }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/100x180" fluid style={{ height: '150px', width: '287px' }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/100x180" fluid style={{ height: '150px', width: '287px' }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Body2;
