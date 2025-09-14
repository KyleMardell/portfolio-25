import { Container, Row, Col } from 'react-bootstrap';


const Skills = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Skills</h2>
                        <p>
                            Here are the core technologies and tools I've been working with while building full-stack web applications.
                            I focus on writing clean, maintainable code and learning new frameworks quickly when projects demand it.
                        </p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col xs={6} md={3}>
                        <h3>Front-End</h3>
                        <p>React, Next.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h3>Back-End</h3>
                        <p>Python, Django, Django REST Framework, PostgreSQL</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h3>Version Control</h3>
                        <p>Git, GitHub</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h3>Other</h3>
                        <p>REST APIs, Deployment (CapRover, VPS), Problem Solving, Organisation</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>Background</h2>
                        <p>
                            Alongside my technical skills, here's a quick look at my recent education and experience that shaped me as a developer.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md={6} className="mb-4">
                        <div className="p-3 bg-light rounded shadow-sm h-100">
                            <h3 className="h5">Education</h3>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <strong>Diploma in Full-Stack Software Development</strong><br />
                                    Code Institute (2025)
                                </li>
                                <li className="mt-2">
                                    <strong>BSc Computer Games Technology</strong><br />
                                    Manchester Metropolitan University (2009)
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={6} className="mb-4">
                        <div className="p-3 bg-light rounded shadow-sm h-100">
                            <h3 className="h5">Experience</h3>
                            <p>
                                Recently transitioned into web development after completing my diploma.
                                Built and deployed full-stack apps using <strong>React, Django, and PostgreSQL</strong>.
                                I continue to develop <strong>personal projects</strong> and expand my skill set, learning modern tools such as
                                <strong> Next.js</strong> and <strong>TypeScript</strong> to stay up to date with current industry practices.
                                My background outside of tech gave me strong problem-solving skills, attention to detail, and the ability to work both independently and as part of a team.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
