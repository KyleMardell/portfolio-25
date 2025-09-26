import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Project.module.css";

type ProjectProps = {
    src: string;
    alt: string;
    heading: string;
    description: string;
    link:string;
}


const Project = ({src, alt, heading, description, link }: ProjectProps) => {

    return (
        <Container className={styles.container}>
            <Row className="mb-5 align-items-center">
                    <Col md={6} className='d-flex justify-content-center align-items-center'>
                        <img src={src} alt={alt} className={styles.projectImage} />
                    </Col>
                    <Col md={6}>
                        <h3>{heading}</h3>
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                        <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </Col>
                </Row>
        </Container>
    );
};

export default Project;
