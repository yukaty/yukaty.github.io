import { Container, Row, Col, Card } from 'react-bootstrap';

const SkillCard = ({ title, skills, icon }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <i className={`bi ${icon} text-secondary fs-4 me-2`}></i>
          <Card.Title className="mb-0 h5 d-flex align-items-center">
            {title}
          </Card.Title>
        </div>
        <div className="d-flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="skill-badge"
            >
              {skill}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

const CertificationBadge = ({ title, icon }) => (
  <Card className="mb-2">
    <Card.Body className="py-2">
      <div className="d-flex align-items-center">
        <i className={`bi ${icon} me-3 fs-4`}></i>
        <span className="fw-medium">{title}</span>
      </div>
    </Card.Body>
  </Card>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "bi-gear-fill",
      skills: [
        "Java", "Python", "PHP", "Spring Boot", "Django", "Flask",
        "MySQL", "MongoDB",
      ]
    },
    {
      title: "Frontend Development",
      icon: "bi-laptop-fill",
      skills: [
        "HTML5", "CSS3", "Bootstrap", "SASS",
        "JavaScript", "React", "Angular",
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "bi-cloud-fill",
      skills: [
        "AWS", "Azure", "Linux", "Docker",
        "Git/GitHub", "GitHub Actions",
      ]
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      icon: "bi-cloud-check-fill"
    },
    {
      title: "Certified Azure DevOps Engineer",
      icon: "bi-microsoft"
    },
    {
      title: "Professional Scrum Master",
      icon: "bi-award-fill"
    }
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="display-6 mb-4">Skills</h2>

        <Row className="g-4 mb-5">
          {skillCategories.map((category, index) => (
            <Col key={index} md={6} lg={4}>
              <SkillCard {...category} />
            </Col>
          ))}
        </Row>

        {/* <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h3 className="h4 mb-3">
            Certifications</h3>
            {certifications.map((cert, index) => (
              <CertificationBadge key={index} {...cert} />
            ))}
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default Skills;