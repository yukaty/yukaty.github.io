import { Icons } from '../utils/icons';


const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Icons.Github size={40} />,
      url: 'https://github.com/yukaty'
    },
    {
      name: 'Email',
      icon: <Icons.Email size={40} />,
      url: 'mailto:yukat.ca@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: <Icons.Linkedin size={40} />,
      url: 'https://linkedin.com/in/yuka-tamura'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-heading mb-6 text-light-primary dark:text-dark-primary">
            Get in Touch
          </h2>
          <p className="text-light-secondary dark:text-dark-secondary mb-8">
            Currently open to new opportunities.<br />
            Feel free to reach out for collaborations or just say hi!
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <SocialLink key={link.name} {...link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ name, icon, url }) => (
  <a
    href={url}
    className="text-light-secondary dark:text-dark-secondary hover:text-light-primary
               dark:hover:text-dark-primary transition-colors duration-200 transform
               hover:-translate-y-1"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
  >
    {icon}
  </a>
);

export default Contact;
