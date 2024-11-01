import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-light">
      <Container>
        <div className="text-center">
          <small className="text-secondary">
            © {new Date().getFullYear()} Yuka Tamura
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;