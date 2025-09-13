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
                        <h1 className="text-center">Kyle Mardell - Junior Full Stack Web Developer</h1>
                        <h2 className="text-center">React • Django • PostgreSQL • Responsive Design</h2>
                        <p>
                            I'm Kyle, a junior full-stack developer based in Manchester.  <br />
                            I recently completed a Full Stack Software Development diploma, where I built
                            projects with React, Django REST, and PostgreSQL.<br />
                            With a background in technical problem-solving and customer-focused work,
                            I bring strong attention to detail and teamwork to every project.<br />
                            I'm eager to keep learning, build meaningful web applications,
                            and contribute to a forward-thinking development team.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
