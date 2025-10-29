import { Container, Row, Col } from 'react-bootstrap';
import styles from "./About.module.css";


const About = () => {
    return (
        <section>
            <Container className="my-5">
                <Row>
                    <Col xs={12}>
                        <h2 className={`mb-4 text-center ${styles.SectionTitle}`}>About Me</h2>
                        <p className={`${styles.AboutTextOne} mb-4`} data-aos="fade-right" data-aos-duration="1500">
                            I'm Kyle Mardell, a <strong>full-stack software developer</strong> based in <strong>Manchester, U.K</strong>.
                        </p>
                        <p className={`${styles.AboutTextTwo} mb-4 text-end`} data-aos="fade-left" data-aos-duration="1500">
                            My background is a little different from most developers — I spent years <br />
                            solving problems hands-on as a <strong>vehicle technician</strong> before retraining in full-stack development.
                        </p>
                        <p className={`${styles.AboutTextThree} mb-4`} data-aos="fade-right" data-aos-duration="1500">
                            That technical mindset,
                            plus over a decade in customer-facing roles, <br />
                            taught me how to break down complex problems and communicate solutions clearly.
                        </p>
                        <p className={`${styles.AboutTextFour} mb-4 text-end`} data-aos="fade-left" data-aos-duration="1500">
                            I recently completed a diploma in Full-Stack Software Development, <br />where I built
                            real-world projects with <strong>React</strong>, <strong>Django REST Framework</strong>, and <strong>PostgreSQL</strong>.
                        </p>
                        <p className={`${styles.AboutTextFive} mb-4`} data-aos="fade-right" data-aos-duration="1500">
                            I enjoy the balance of creative front-end work and logical back-end problem-solving, <br />
                            and I'm always looking for opportunities to learn new tools and frameworks.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
