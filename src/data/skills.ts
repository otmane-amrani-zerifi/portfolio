export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "SiJava" },
      { name: "Python", icon: "SiPython" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "C", icon: "SiC" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "Bash", icon: "SiBash" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss3" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Spring Boot", icon: "SiSpringboot" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Django", icon: "SiDjango" },
      { name: "Express", icon: "SiExpress" },
      { name: "REST APIs", icon: "SiPostman" },
    ],
  },
  {
    title: "Data & Messaging",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Cassandra", icon: "SiApachecassandra" },
      { name: "Redis", icon: "SiRedis" },
      { name: "RabbitMQ", icon: "SiRabbitmq" },
      { name: "WebSockets", icon: "SiSocketdotio" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Linux", icon: "SiLinux" },
      { name: "CI/CD", icon: "SiGithubactions" },
    ],
  },
];