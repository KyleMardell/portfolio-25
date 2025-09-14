import { Container, Row, Col } from 'react-bootstrap';


const About = () => {
    return (
        <section>
            <Container className="my-5">
                <Row>
                    <Col xs={12}>
                        <h2 className="mb-4">About Me</h2>
                        <p>
                            I'm Kyle Mardell, a junior full-stack software developer based in Manchester, U.K.
                            My background is a little different from most developers — I spent years solving problems hands-on
                            as a vehicle technician before retraining in full-stack development. That technical mindset,
                            plus over a decade in customer-facing roles, taught me how to break down complex problems and
                            communicate solutions clearly.
                        </p>
                        <p>
                            I recently completed a diploma in Full-Stack Software Development, where I built
                            real-world projects with <strong>React</strong>, <strong>Django REST Framework</strong>, and
                            <strong>PostgreSQL</strong>. I enjoy the balance of creative front-end work and logical
                            back-end problem-solving, and I'm always looking for opportunities to learn new tools and
                            frameworks.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
