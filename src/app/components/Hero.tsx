import { Container, Row, Col, Image } from 'react-bootstrap';

import FaceAnimation from './FaceAnimation';

const Hero = () => {
    return (
        <section>
            <Container className="my-5">
                <Row className="align-items-center">
                    {/* Face Animation */}
                    <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                        <FaceAnimation />
                    </Col>

                    {/* Placeholder text */}
                    <Col xs={12} md={8}>
                        <h1>Kyle Mardell</h1>
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
