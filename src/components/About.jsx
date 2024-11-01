import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="display-6 mb-4">About Me</h2>
        <Row>
          <Col lg={8}>
            <p className="lead mx-2 mb-4">
              I'm a Full-stack Developer passionate about efficient, user-focused solutions.
              I work across frontend and backend to create robust web apps with great user experiences.
              My background includes e-commerce, financial, logistics and delivery platforms,
              and other solutions for businesses of all sizes.
              Always learning 🤟🏻
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;