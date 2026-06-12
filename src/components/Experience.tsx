import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const experienceEntries = [
  {
    company: 'Phenoma Research Platform',
    role: 'Software Engineer',
    period: 'Aug 2025 · 4 months',
    summary:
      'Architected and delivered the data and application layer behind a scientific research platform for plant phenotyping workflows.',
    highlights: [
      'Built a public portal and a private administrative dashboard for research teams.',
      'Designed a modular Docker Compose setup with secure NGINX routing for isolated admin traffic.',
      'Implemented a FastAPI backend with Prisma ORM and a responsive Tailwind CSS interface.',
    ],
    tags: ['FastAPI', 'Prisma', 'Docker Compose', 'NGINX', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    company: 'Liadtech',
    role: 'Full-Stack Developer, SaaS Team',
    period: 'May 2024 · 3 months',
    summary:
      'Contributed to SaaS development across CRM and workflow automation features in a production-oriented team environment.',
    highlights: [
      'Worked across full-stack features spanning backend services, frontend interfaces, and integrations.',
      'Used Django, FastAPI, Flask, Node.js, React, PostgreSQL, and MongoDB across product work.',
      'Supported performance improvements, API reliability, and frontend responsiveness.',
    ],
    tags: ['Django', 'FastAPI', 'Flask', 'Node.js', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'NGINX'],
  },
  {
    company: 'SellnSeal',
    role: 'Software Engineer',
    period: 'Oct 2024 · 6 months',
    summary:
      'Software engineering experience focused on building reliable product features and collaborating on delivery in a six-month engagement.',
    highlights: [
      'Added the earlier professional experience listed on the CV to show additional full-time engineering exposure.',
      'Strengthened the portfolio story around production work, scalability, and maintainable systems.',
    ],
    tags: ['Software Engineering', 'Product Delivery', 'Collaboration'],
  },
];

const techFocus = [
  'React',
  'Next.js',
  'Node.js',
  'FastAPI',
  'Django',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Linux',
  'Git',
];


const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Professional Experience">
      <div className="max-w-5xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-secondary-200/70 bg-white/80 p-8 shadow-card backdrop-blur-xl dark:border-secondary-700 dark:bg-secondary-900/70"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-300">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white">Professional Experience</h3>
              <p className="text-sm text-secondary-500 dark:text-secondary-400">
                Selected roles from software engineering and research-focused work.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5">
            {experienceEntries.map((entry, index) => (
              <motion.div
                key={`${entry.company}-${entry.role}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="rounded-2xl border border-secondary-200/70 bg-secondary-50/80 p-5 dark:border-secondary-700 dark:bg-secondary-800/60"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-primary-700 shadow-sm dark:bg-secondary-900 dark:text-primary-300">
                      <Briefcase className="h-4 w-4" />
                      {entry.company}
                    </div>
                    <h4 className="mt-3 text-xl font-bold text-secondary-900 dark:text-white">{entry.role}</h4>
                    <p className="mt-1 text-sm font-medium text-secondary-500 dark:text-secondary-400">{entry.period}</p>
                    <p className="mt-3 max-w-2xl text-secondary-700 dark:text-secondary-300">{entry.summary}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {entry.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 rounded-2xl bg-white/80 p-4 dark:bg-secondary-900/70">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
                      <p className="text-secondary-700 dark:text-secondary-300">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-xs font-medium text-secondary-700 dark:border-secondary-700 dark:bg-secondary-900 dark:text-secondary-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-500 dark:text-secondary-400">
              Stack
            </h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {techFocus.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-secondary-200 bg-white px-4 py-2 text-sm font-medium text-secondary-700 shadow-sm dark:border-secondary-700 dark:bg-secondary-900 dark:text-secondary-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

      </div>
    </SectionWrapper>
  );
};

export default Experience;