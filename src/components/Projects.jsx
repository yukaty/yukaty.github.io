import React from "react";
import { Icons } from "../utils/icons";

const ProjectCard = ({ title, description, tags, githubLink, demoLink }) => {
  return (
    <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-light dark:shadow-dark h-full">
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
      title: "Tech Trend Tracker",
      description:
        "AI-powered application that tracks and summarizes technology trends from news articles using RAG.",
      tags: ["Next.js", "Python", "FastAPI", "PostgreSQL", "OpenAI", "Docker"],
      githubLink: "https://github.com/yukaty/tech-trend-tracker",
    },
    // {
    //   title: "AI FAQ Agent",
    //   description:
    //     "AI-powered FAQ agent that answers user questions from a knowledge base using embeddings and RAG, built with FastAPI, LangChain, and CrewAI.",
    //   tags: ["Python", "FastAPI", "OpenAI", "LangChain", "FAISS", "CrewAI"],
    //   githubLink: "",
    // },
    // {
    //   title: "Modern eCommerce with Next.js",
    //   description:
    //     "Full-stack eCommerce application with Stripe payments and responsive design.",
    //   tags: ["Next.js", "TypeScript", "Tailwind","PostgreSQL", "Stripe"],
    //   githubLink: "https://github.com/yukaty/nextjs-ecommerce"
    // },
    {
      title: "eCommerce with Next.js + Go",
      description:
        "Scalable eCommerce system with Next.js frontend and Go backend, deployed on Cloud Run.",
      tags: ["Next.js", "Go", "Google Cloud", "CI/CD", "Docker", "Stripe"],
      githubLink: "https://github.com/yukaty/golang-nextjs-ecommerce",
    },
    // {
    //   title: "Multilingual Event Platform",
    //   description: "An event invitation platform supporting multiple languages with Stripe integration.",
    //   tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    //   githubLink: "https://github.com/yukaty/multilingual-event-platform",
    // },
    {
      title: "Restaurant Review & Reservation",
      description:
        "A full-stack app with Stripe integration including subscription management.",
      tags: ["Java", "Spring Boot", "MySQL", "Stripe"],
      githubLink: "https://github.com/yukaty/restaurant-review-app",
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
