import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
const ProjectCard = ({ title, description, tags, githubLink, demoLink }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="mb-3 d-flex justify-content-between">
          <div className="d-flex">
            {title}
          </div>
          <div className="d-flex">
            {githubLink && (
              <a href={githubLink} className="text-secondary" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github fs-4"></i>
              </a>
            )}
            {demoLink && (
              <a href={demoLink} className="text-secondary" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-box-arrow-up-right fs-5"></i>
              </a>
            )}
          </div>
        </Card.Title>
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
      </Card.Body>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Book Similarity Search API",
      description: "FastAPI application for book similarity search using embeddings.",
      tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "OpenAI", "Ollama"],
      githubLink: "https://github.com/yukaty/vector-search-api"
    },
    {
      title: "Clothing Recommendations API",
      description: "AI clothing suggestions service based on weather conditions.",
      tags: ["Python", "Flask", "OpenAI"],
      githubLink: "https://github.com/yukaty/clothing-recommendations-api"
    },
    {
      title: "Recipe API",
      description: "API for managing recipes with Django, Docker, and CI/CD.",
      tags: ["Python", "Django REST Framework", "PostgreSQL", "Docker"],
      githubLink: "https://github.com/yukaty/django-recipe-api"
    },
    {
      title: "Restaurant Rating App",
      description: "A full-stack application for restaurant reviews and ratings.",
      tags: ["Java", "Spring Boot", "MySQL", "Stripe API"],
      githubLink: "https://github.com/yukaty/restaurant-review-app"
    },
    {
      title: "eCommerce Application",
      description: "A full-stack eCommerce solution with modern architecture.",
      tags: ["Java", "Spring Boot", "Angular", "Bootstrap", "MySQL"],
      githubLink: "https://github.com/yukaty/full-stack-ecommerce"
    },
    {
      title: "AI Chatbot App",
      description: "AI chatbot app with the BERT model.",
      tags: ["Python", "Django", "React", "Docker", "BERT"],
      githubLink: "https://github.com/yukaty/chatbot-app"
    },
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