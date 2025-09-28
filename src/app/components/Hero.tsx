import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from "./Hero.module.css";

import FaceAnimation from './FaceAnimation';

const Hero = () => {
    return (
        <section>
            <Container className="my-5">
                <Row className="align-items-center p-0 text-center mb-4">
                    <Col xs={12} md={4} className="mb-3 mb-md-0 p-0">
                        <FaceAnimation />
                    </Col>
                    <Col xs={12} md={8} className='p-0'>
                        <h1 className={`${styles.NameText} mb-3`}>Kyle Mardell</h1>
                        <h2 className={`${styles.RoleText}`}>Junior Full Stack Web Developer</h2>
                        <h3 className={`${styles.SkillsText}`}>React • Django • PostgreSQL • Responsive Design</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className='p-0' data-aos="fade-down">
                        <p className='text-center'>
                            I'm Kyle, a junior full-stack developer based in Manchester.  <br />
                            I recently completed a Full Stack Software Development diploma, where I built
                            projects with <strong>React, Django REST, and PostgreSQL</strong>.<br />
                            With a background in technical problem-solving and customer-focused work,
                            I bring strong attention to detail to each project and learn from every experience.<br />
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
