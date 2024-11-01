import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'bi-github',
      url: 'https://github.com/yukaty'
    },
    {
      name: 'Email',
      icon: 'bi-envelope',
      url: 'mailto:yukat.ca@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: 'bi-linkedin',
      url: 'https://linkedin.com/in/yuka-tamura'
    }
  ];

  return (
    <section id="contact" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <h2 className="display-6 mb-4">Get in Touch</h2>
            <p className="text-secondary mb-4">
              Currently open to new opportunities.<br />
              Feel free to reach out for collaborations or just say hi!
            </p>
            <div className="d-flex justify-content-center gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="link"
                  href={link.url}
                  className="social-icon p-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <i className={`bi ${link.icon}`}></i>
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
