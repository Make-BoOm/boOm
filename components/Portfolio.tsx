import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const projects = [
  {
    title: "Neon City Drift",
    category: "Music Video",
    image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=2664&auto=format&fit=crop",
    size: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    title: "Tech Review 2024",
    category: "YouTube Content",
    image: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=2672&auto=format&fit=crop",
    size: "col-span-1"
  },
  {
    title: "Fitness Brand Launch",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
    size: "col-span-1"
  },
  {
    title: "Travel Vlog: Tokyo",
    category: "Reels / TikTok",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop",
    size: "col-span-1 md:col-span-2"
  }
];

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            {t.portfolio.heading} <span className="text-gradient-purple">{t.portfolio.headingSpan}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            {t.portfolio.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.size}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-violet-400 text-sm font-bold tracking-wider uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 border border-white/30">
                  <Play className="w-6 h-6 fill-white text-white ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-semibold tracking-wide">
            {t.portfolio.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};