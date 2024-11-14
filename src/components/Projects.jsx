import React from "react";
import { Icons } from '../utils/icons';

const ProjectCard = ({ title, description, tags, githubLink, demoLink }) => {
  return (
    <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-light dark:shadow-dark transition-all duration-200 h-full hover:-translate-y-1 hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-medium text-light-primary dark:text-dark-primary">
            {title}
          </h3>
          <div className="flex gap-3 text-light-secondary dark:text-dark-secondary">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              >
                <Icons.Github size={25} />
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              >
                <Icons.ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-light-secondary dark:text-dark-secondary mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-light-secondary/10 dark:bg-dark-secondary/10
                       text-light-secondary dark:text-dark-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Book Similarity Search API",
      description:
        "FastAPI application for searching similar books based on embeddings.",
      tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "OpenAI", "Ollama"],
      githubLink: "https://github.com/yukaty/vector-search-api",
    },
    {
      title: "Clothing Recommendations API",
      description: "AI-powered clothing recommendation service based on weather conditions.",
      tags: ["Python", "Flask", "OpenAI"],
      githubLink: "https://github.com/yukaty/clothing-recommendations-api",
    },
    {
      title: "Recipe API",
      description: "API for managing and sharing recipes with Django, Docker, and CI/CD.",
      tags: ["Python", "Django REST Framework", "PostgreSQL", "Docker", "GitHub Actions"],
      githubLink: "https://github.com/yukaty/django-recipe-api",
    },
    {
      title: "Restaurant Review & Reservation",
      description: "A full-stack app for restaurant reviews and reservations with Stripe integration.",
      tags: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
      githubLink: "https://github.com/yukaty/restaurant-review-app",
    },
    {
      title: "eCommerce Application",
      description: "A full-stack eCommerce solution featuring Stripe payments and Okta authentication.",
      tags: ["Java", "Spring Boot", "Angular", "Bootstrap", "MySQL"],
      githubLink: "https://github.com/yukaty/full-stack-ecommerce",
    },
    {
      title: "AI Chatbot App",
      description: "AI chatbot app powered by the BERT model for natural language understanding.",
      tags: ["Python", "Django", "React", "Docker", "BERT"],
      githubLink: "https://github.com/yukaty/chatbot-app",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-light-primary dark:text-dark-primary mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
