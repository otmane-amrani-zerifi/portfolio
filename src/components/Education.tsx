import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const educationHighlights = [
  '1337 School graduate with a strong foundation in programming and systems thinking.',
  'Data science specialization focused on analysis, structure, and problem solving.',
  'Built a practical mindset around writing maintainable code and working with real-world data.',
];

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <motion.aside
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-3xl border border-secondary-200/70 bg-gradient-to-b from-secondary-50 to-white p-8 shadow-card dark:border-secondary-700 dark:from-secondary-900/80 dark:to-secondary-800/80"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary-900 text-white dark:bg-white dark:text-secondary-900">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white">Education</h3>
            <p className="text-sm text-secondary-500 dark:text-secondary-400">Academic foundation and specialization</p>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {educationHighlights.map((item) => (
            <div key={item} className="rounded-2xl bg-white/90 p-4 text-secondary-700 shadow-sm dark:bg-secondary-900/70 dark:text-secondary-300">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary-200/70 bg-primary-50 p-5 dark:border-primary-900/40 dark:bg-primary-500/10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">Focus areas</p>
          <p className="mt-3 text-secondary-700 dark:text-secondary-200">Full-stack development, data-driven systems, research tooling, and interfaces that make technical data easier to use.</p>
        </div>
      </motion.aside>
    </SectionWrapper>
  );
};

export default Education;
