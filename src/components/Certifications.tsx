import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Google IT Support Certificate',
    issuer: 'Earned via Coursera',
    description:
      'Comprehensive training in system troubleshooting, networking fundamentals, Linux tools, security protocols, and IT infrastructure management.',
    href: '/Coursera 28SCPF3JU6R8.pdf',
    cta: 'View Certificate →',
  },
  {
    title: "Attestation d'accomplissement de niveau",
    issuer: '1337 école de programmation - UM6P / 42 Network',
    description:
      'Réf : At-lvl-6225/2025. Level 13.71 / 21, formation « Architecte en Technologies du Numérique », délivrée à Benguerir le 08/12/2025.',
    href: '/otamrani.pdf',
    cta: 'View Certificate →',
  },
];

const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="max-w-4xl mx-auto grid gap-6">
        {certifications.map((certification, index) => (
          <motion.div
            key={certification.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="card flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-4 rounded-full">
              <Award size={48} className="text-primary-600 dark:text-primary-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
                {certification.title}
              </h3>

              <p className="text-secondary-700 dark:text-secondary-300 mb-2">
                {certification.issuer}
              </p>

              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                {certification.description}
              </p>

              <a
                href={certification.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-primary-600 dark:text-primary-400 
                         hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                {certification.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;