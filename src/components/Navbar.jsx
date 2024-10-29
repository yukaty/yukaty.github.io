import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = ({ theme, toggleTheme }) => {
  return (
    <Navbar expand="lg" fixed="top" className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-primary fs-2">
          YukaT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <button
              onClick={toggleTheme}
              className="theme-button"
              aria-label="Toggle theme"
            >
              <i className={`bi ${theme === 'light' ? 'bi-sun' : 'bi-moon'}`}></i>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;