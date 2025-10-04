import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from "./Hero.module.css";

import FaceAnimation from './FaceAnimation';

const Hero = () => {
    return (
        <section>
            <Container className="my-5">
                <Row className="align-items-center p-0 text-center mb-5">
                    <Col xs={12} md={4} className="mb-3 mb-md-0 p-0">
                        <FaceAnimation />
                    </Col>
                    <Col xs={12} md={8} className='p-0'>
                        <h1 className={`${styles.NameText} mb-3`}>Kyle Mardell</h1>
                        <h2 className={`${styles.RoleText}`}>Junior Full Stack Web Developer</h2>
                        <h3 className={`${styles.SkillsText}`}>React • Django • PostgreSQL • Responsive Design</h3>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col className='p-0'>
                        <p className={`text-start ${styles.IntroTextOne} mb-3`} data-aos="fade-down">
                            I'm Kyle, a <strong>junior full-stack developer</strong> based in Manchester.
                        </p>
                        <p className={`text-end ${styles.IntroTextTwo} mb-3`} data-aos="fade-left">
                            I recently completed a Full Stack Software Development diploma,<br /> 
                            where I built projects with <strong>React, Django REST, and PostgreSQL</strong>.
                        </p>
                        <p className={`text-start ${styles.IntroTextTwo} mb-3`} data-aos="fade-right">
                            With a background in technical problem-solving and customer-focused work, <br />
                            I bring strong attention to detail to each project and learn from every experience.
                        </p>
                        <p className={`text-end ${styles.IntroTextOne} mb-3`} data-aos="fade-up">
                            I'm eager to keep learning, build meaningful web applications, <br />
                            and contribute to a forward-thinking development team.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
