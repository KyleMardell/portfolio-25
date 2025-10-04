import { Container, Row, Col, Image } from 'react-bootstrap';
import Project from './Project';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section>
            <Container className="my-5">
                <Row>
                    <Col xs={12} className='text-center mb-5'>
                        <h2 className={styles.SectionTitle}>Projects</h2>
                    </Col>
                </Row>

                {/* Project 1 */}
                <Project
                    src="/images/projects/mancveganguide.gif"
                    alt="Manchester Vegan Guide project preview"
                    heading="Manchester Vegan Guide"
                    description="A public directory of vegan and vegetarian restaurants in Manchester. 
                            Built with <strong>Next.js</strong> and focused on <strong>SEO</strong> to rank on Google. 
                            Deployed on my own VPS with analytics set up."
                    link="https://manchesterveganguide.com"
                />
                
                {/* Project 2 */}
                <Project
                    src="/images/projects/beeteach.07efa8e7019840890a79.gif"
                    alt="Bee Teach project preview"
                    heading="Bee Teach - Educational Resource Sharing App"
                    description="A social platform for teachers and parents to share educational resources. 
                            Developed with <strong>Django</strong> and <strong>PostgreSQL</strong>, featuring user authentication, posts, likes, and comments."
                    link="https://github.com/KyleMardell/bee-teach"
                />

                {/* Project 3 */}
                <Project
                    src="/images/projects/freeflow.406e2fb9db4fe62a7d74.png"
                    alt="Free Flow project preview"
                    heading="Free Flow - Freelance Project Tracker"
                    description="A full-stack app for freelancers to manage projects, track tasks, and generate invoices.
                            Built with <strong>React</strong> on the front end and <strong>Django REST Framework</strong> with a <strong>PostgreSQL</strong> database."
                    link="https://github.com/KyleMardell/freeflow-app"
                />
                
            </Container>
        </section>
    );
};

export default Projects;
