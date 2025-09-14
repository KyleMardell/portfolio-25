import { Container, Row, Col } from 'react-bootstrap';


const Contact = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Contact</h2>
                        <p>
                            I'm always open to new opportunities, collaborations, or just a chat about web development.
                            The best way to reach me is by email or through my LinkedIn.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-4">
                    <Col xs="auto" className="text-center">
                        <a href="mailto:mardell.kyle@gmail.com" className="d-block mb-3">
                            <i className="bi bi-envelope" style={{ fontSize: "1.5rem" }}></i><br />
                            mardell.kyle@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kyle-mardell-7b4648288"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-block mb-3"
                        >
                            <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i><br />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/KyleMardell"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-block"
                        >
                            <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i><br />
                            GitHub
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default Contact;
