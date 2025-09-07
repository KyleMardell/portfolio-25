import { Container, Row, Col, Image } from 'react-bootstrap';

const Hero = () => {
    return (
        <section>
            <Container className="my-5">
                <Row className="align-items-center">
                    {/* Placeholder image */}
                    <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                        <p>Image here</p>
                    </Col>

                    {/* Placeholder text */}
                    <Col xs={12} md={8}>
                        <h1>Hero</h1>
                        <p>
                            This is a placeholder introduction.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
