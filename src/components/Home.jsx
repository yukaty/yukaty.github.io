import React from 'react';
import { Icons } from '../utils/icons';

const Home = ({ handleNavClick }) => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up space-y-8">

            <h1 className="text-6xl md:text-7xl font-heading font-bold">
              <span className="gradient-text">Yuka Tamura</span>
            </h1>

            <div className="space-y-1">
              <p className="text-3xl font-bold text-light-primary dark:text-dark-primary">
                Full Stack Developer
              </p>
              <p className="text-sm font-light text-light-secondary dark:text-dark-secondary">
                Based in Calgary, Canada
              </p>
            </div>

            <p className="text-xl font-light text-light-secondary dark:text-dark-secondary">
              Crafting digital experiences with{' '}
              <span className="text-light-primary dark:text-dark-primary font-medium">
                clean code
              </span>{' '}
              and{' '}
              <span className="text-light-primary dark:text-dark-primary font-medium">
                thoughtful design
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <ActionButton
                icon={<Icons.Github size={20} />}
                text="View Projects"
                onClick={() => handleNavClick('projects')}
              />
              <ActionButton
                icon={<Icons.Email size={20} />}
                text="Get in Touch"
                onClick={() => handleNavClick('contact')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ActionButton = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="group flex items-center gap-2 px-6 py-2.5 border-2 border-light-primary
               dark:border-dark-primary text-light-primary dark:text-dark-primary
               hover:bg-light-primary dark:hover:bg-dark-primary hover:text-light-bg
               dark:hover:text-dark-bg transition-all duration-300 transform
               hover:-translate-y-0.5 hover:shadow-lg rounded-lg"
  >
    <span className="group-hover:scale-110 transition-transform duration-300">
      {icon}
    </span>
    <span>{text}</span>
  </button>
);

export default Home;