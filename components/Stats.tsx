import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.stats.views, value: '+50M' },
    { label: t.stats.content, value: '2.5k+' },
    { label: t.stats.brands, value: '+20' },
    { label: t.stats.reach, value: '100%' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};