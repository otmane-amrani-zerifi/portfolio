import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-secondary-700 dark:text-secondary-300"
        >
          <p className="text-lg">
            I'm a full-stack developer focused on turning complex data into reliable products, with experience
            across data pipelines, interactive dashboards, and responsive user interfaces.
          </p>

          <p>
            At <span className="font-semibold text-primary-600 dark:text-primary-400">Phenoma</span>, I work on
            experimental phenotyping data: collecting it from research workflows, structuring and storing it,
            visualizing it for scientists, and preparing it for AI modeling and computer vision use cases.
          </p>

          <p>
            I graduated from <span className="font-semibold text-primary-600 dark:text-primary-400">1337 School</span>,
            where I built a strong foundation in programming, systems thinking, and problem solving, then deepened
            that background with a data science specialization.
          </p>

          <p>
            My approach is practical: build clean systems, keep the data trustworthy, and design interfaces that make
            complex information easy to understand and act on.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;