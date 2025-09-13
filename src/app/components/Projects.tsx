import { Container, Row, Col, Image } from 'react-bootstrap';


const Projects = () => {
    return (
        <section>
            <Container className="my-5">
                <Row>
                    <Col xs={12}>
                        <h2 className="mb-4">Projects</h2>
                        <p className="mb-5">
                            A selection of projects that showcase my skills in full-stack development,
                            using modern frameworks like React, Django, and Next.js.
                        </p>
                    </Col>
                </Row>

                {/* Project 1 */}
                <Row className="mb-5 align-items-center">
                    <Col md={6}>
                        <img src="/images/projects/freeflow.406e2fb9db4fe62a7d74.png" alt="Free Flow project preview" className="img-fluid rounded" />
                    </Col>
                    <Col md={6}>
                        <h3>Free Flow - Freelance Project Tracker</h3>
                        <p>
                            A full-stack app for freelancers to manage projects, track tasks, and generate invoices.
                            Built with <strong>React</strong> on the front end and <strong>Django REST Framework</strong> with a <strong>PostgreSQL</strong> database.
                        </p>
                        <a href="https://github.com/KyleMardell/freeflow-app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </Col>
                </Row>

                {/* Project 2 */}
                <Row className="mb-5 align-items-center flex-md-row-reverse">
                    <Col md={6}>
                        <img src="/images/projects/beeteach.07efa8e7019840890a79.gif" alt="Bee Teach project preview" className="img-fluid rounded" />
                    </Col>
                    <Col md={6}>
                        <h3>Bee Teach - Educational Resource Sharing App</h3>
                        <p>
                            A social platform for teachers and parents to share educational resources.
                            Developed with <strong>Django</strong> and <strong>PostgreSQL</strong>, featuring user authentication, posts, likes, and comments.
                        </p>
                        <a href="https://github.com/KyleMardell/bee-teach" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </Col>
                </Row>

                {/* Project 3 */}
                <Row className="mb-5 align-items-center">
                    <Col md={6}>
                        <img src="/images/projects/mancveganguide.gif" alt="Manchester Vegan Guide project preview" className="img-fluid rounded" />
                    </Col>
                    <Col md={6}>
                        <h3>Manchester Vegan Guide</h3>
                        <p>
                            A public directory of vegan and vegetarian restaurants in Manchester.
                            Built with <strong>Next.js</strong> and focused on <strong>SEO</strong> to rank on Google.
                            Deployed on my own VPS with analytics set up.
                        </p>
                        <a href="https://manchesterveganguide.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
