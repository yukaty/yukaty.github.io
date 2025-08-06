import { Icons } from '../utils/icons';

const SkillCard = ({ title, skills, icon: Icon }) => {
  return (
    <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-light dark:shadow-dark p-6 h-full">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="text-2xl text-light-primary dark:text-dark-primary" />
        <h3 className="text-xl font-medium text-light-primary dark:text-dark-primary">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 rounded-full bg-light-secondary/10 dark:bg-dark-secondary/10
                     text-light-secondary dark:text-dark-secondary flex items-center gap-2"
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Icons.Server,
      skills: [
        { name: "Java", icon: <Icons.Java /> },
        { name: "Python", icon: <Icons.Python /> },
        { name: "PHP", icon: <Icons.PHP /> },
        { name: "Spring Boot", icon: <Icons.Spring /> },
        { name: "FastAPI", icon: <Icons.FastAPI /> },
      ]
    },
    {
      title: "Frontend Development",
      icon: Icons.Laptop,
      skills: [
        { name: "TypeScript", icon: <Icons.TypeScript /> },
        { name: "JavaScript", icon: <Icons.JavaScript /> },
        { name: "Next.js", icon: <Icons.NextJS /> },
        { name: "React", icon: <Icons.React /> },
        { name: "Tailwind", icon: <Icons.Tailwind /> },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Icons.Cloud,
      skills: [
        { name: "AWS", icon: <Icons.AWS /> },
        { name: "Azure", icon: <Icons.Azure /> },
        { name: "Linux", icon: <Icons.Linux /> },
        { name: "Docker", icon: <Icons.Docker /> },
        { name: "GitHub Actions", icon: <Icons.Github /> },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-light-primary dark:text-dark-primary mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;