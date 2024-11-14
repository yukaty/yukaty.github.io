import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = ({ handleNavClick, theme, toggleTheme }) => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-primary fs-2">
          YukaT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className='bi bi-list text-primary'></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick('about')}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('skills')}>Skills</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('contact')}>Contact</Nav.Link>
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