import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = ({ handleNavClick }) => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto text-center">
            <div className="fade-in-up">
              <h1 className="display-1 fw-bold mb-3">
                <span className="gradient-text">Yuka Tamura</span>
              </h1>
              <div className="mb-5">
                <p className="display-6 fw-bold text-primary mb-0">
                  Full Stack Developer
                </p>
                <p className="fs-6 fw-light text-secondary mb-0">
                  Based in Calgary, Canada
                </p>
              </div>
              <p className="fs-5 fw-light text-secondary mb-5">
                Crafting digital experiences with <span className="text-primary fw-medium">clean code</span> and <span className="text-primary fw-medium">thoughtful design</span>.
              </p>
              <div className="d-flex gap-4 justify-content-center">
                <Button
                  variant="outline-primary"
                  className="btn-outline-glow d-flex align-items-center gap-2 px-3 py-2"
                  onClick={() => handleNavClick('projects')}
                >
                  <i className="bi bi-code-square pe-1"></i>
                  <span>View Projects</span>
                </Button>
                <Button
                  variant="outline-primary"
                  className="btn-outline-glow d-flex align-items-center gap-2 px-3 py-2"
                  onClick={() => handleNavClick('contact')}
                >
                  <i className="bi bi-envelope pe-1"></i>
                  <span>Get in Touch</span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;