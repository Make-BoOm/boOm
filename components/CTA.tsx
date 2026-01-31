import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const CTA: React.FC = () => {
  const { t, dir } = useLanguage();
  const whatsappLink = "https://wa.me/201000000000";

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-violet-900/10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            {t.cta.heading} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">{t.cta.headingSpan}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            {t.cta.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
             <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black text-lg font-bold rounded-full px-12 py-5 hover:bg-violet-50 transition-colors flex items-center justify-center gap-3 whitespace-nowrap shadow-lg shadow-violet-500/20"
             >
                {t.cta.button}
                {/* Message Circle Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
             </a>
          </motion.div>
          
          <p className="mt-6 text-sm text-gray-600">
            {t.cta.spam}
          </p>
        </div>
      </div>
    </section>
  );
};