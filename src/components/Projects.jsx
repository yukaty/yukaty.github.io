import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const ProjectCard = ({ title, description, tags, githubLink, demoLink }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="mb-3">{title}</Card.Title>
        <Card.Text className="text-secondary mb-3">
          {description}
        </Card.Text>
        <div className="mb-3">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              bg="secondary"
              className="me-2"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="d-flex gap-2">
          {githubLink && (
            <a href={githubLink} className="text-secondary" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          )}
          {demoLink && (
            <a href={demoLink} className="text-secondary" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Clothing Recommendations API",
      description: "AI-powered API that provides clothing suggestions based on weather conditions.",
      tags: ["Python", "Flask", "OpenAI API"],
      githubLink: "https://github.com/yukaty/weather-wardrobe-ai"
    },
    {
      title: "Restaurant Rating App",
      description: "A full-stack application for restaurant reviews and ratings.",
      tags: ["Java", "Spring Boot", "MySQL", "Stripe API"],
      githubLink: "https://github.com/yukaty/restaurant-review-app"
    },
    {
      title: "eCommerce Application",
      description: "A complete eCommerce solution with modern architecture.",
      tags: ["Java", "Spring Boot", "Angular", "MySQL", "Okta API"],
      githubLink: "https://github.com/yukaty/full-stack-ecommerce"
    },
    {
      title: "AI Chatbot App",
      description: "AI chatbot app with the BERT model.",
      tags: ["Python", "Django", "React",, "BERT"],
      githubLink: "https://github.com/yukaty/chatbot-app"
    },
    {
      title: "Restaurant Website",
      description: "A responsive restaurant website with modern design.",
      tags: ["Bootstrap", "JavaScript", "HTML/CSS"],
      demoLink: "https://yukaty.github.io/demo-restaurant-website/"
    },
    {
      title: "Tutor Portfolio Website",
      description: "A clean and professional portfolio website for tutors.",
      tags: ["Bootstrap", "JavaScript", "HTML/CSS"],
      demoLink: "https://yukaty.github.io/demo-tutor-portfolio/"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="display-6 mb-4">Projects</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;