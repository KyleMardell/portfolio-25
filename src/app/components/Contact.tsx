import { Container, Row, Col } from 'react-bootstrap';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2 className={styles.SectionTitle}>Contact</h2>
                        <p className={styles.ContactText}>
                            I'm always open to new opportunities, collaborations, or just a chat about web development.
                            The best way to reach me is by email or through my LinkedIn.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-4 mb-5">
                    <Col xs="12" lg="4" className="text-center">
                        <a href="mailto:mardell.kyle@gmail.com" className={`d-block mb-3 ${styles.ContactLink}`}>
                            <i className={`bi bi-envelope ${styles.ContactIcon}`}></i><br />
                            mardell.kyle@gmail.com
                        </a>
                    </Col>
                    <Col xs="12" lg="4" className="text-center">
                    <a
                            href="https://www.linkedin.com/in/kyle-mardell-7b4648288"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`d-block mb-3 ${styles.ContactLink}`}
                        >
                            <i className={`bi bi-linkedin ${styles.ContactIcon}`}></i><br />
                            LinkedIn
                        </a>
                    </Col>
                    <Col xs="12" lg="4" className="text-center">
                    <a
                            href="https://github.com/KyleMardell"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`d-block mb-3 ${styles.ContactLink}`}
                        >
                            <i className={`bi bi-github ${styles.ContactIcon}`}></i><br />
                            GitHub
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default Contact;
