import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={8} className="mx-auto">
            <h1 className="display-4 mb-3">Hello!</h1>
            <p className="lead mb-4 text-secondary">
              I'm Yuka Tamura, a Full Stack Developer based in Calgary, Canada. <br/>I create seamless online experiences for everyone.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Button variant="outline-secondary" href="#projects">
                View Projects
              </Button>
              <Button variant="outline-secondary" href="#contact">
                Get in Touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;