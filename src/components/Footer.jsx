import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-light">
      <Container>
        <div className="text-center">
          <small className="text-secondary">
            © {new Date().getFullYear()} YukaT. All rights reserved.
          </small>
          <div className="mt-2">
            <small className="text-secondary">
              Built with React & Bootstrap
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;