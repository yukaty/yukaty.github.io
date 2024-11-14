import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-light-primary dark:text-dark-primary mb-10">
          About Me
        </h2>
        <div className="max-w-3xl text-light-secondary dark:text-dark-secondary ">
          <p className="text-xl mb-5">
          I'm a Full-stack Developer passionate about efficient, user-focused solutions.
          My background spans financial systems, large-scale e-commerce, educational platforms,
          and various projects for businesses of all sizes.
          </p>
          <p className="text-xl mb-5">
          Originally from Japan and now based in Canada, I bring both technical expertise
          and multicultural perspective to every project. Being Deaf, I enjoy inclusive environments
          where innovation flourishes through clear written communication and modern tools.
          </p>
          <p className="text-xl">
          Always learning and evolving 🤟🏻
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;