import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t, dir } = useLanguage();
  const whatsappLink = "https://wa.me/201000000000";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-violet-300">{t.hero.badge}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            {t.hero.title} <span className="text-gradient-purple">{t.hero.titleSpan}</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center justify-center gap-2 hover:bg-violet-50 transition-colors"
            >
              {t.hero.cta_primary}
              {/* WhatsApp Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full font-bold text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
              {t.hero.cta_secondary}
            </motion.button>
          </div>
        </motion.div>

        {/* Hero Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: dir === 'rtl' ? -5 : 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
            <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative floating elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -top-8 ${dir === 'rtl' ? '-left-8' : '-right-8'} w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-2xl z-20 shadow-2xl shadow-purple-500/30 flex items-center justify-center`}
                >
                    <span className="text-4xl font-bold text-white">4K</span>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className={`absolute -bottom-4 ${dir === 'rtl' ? '-right-8' : '-left-8'} w-auto px-6 py-4 bg-brand-dark border border-white/10 rounded-xl z-20 shadow-xl flex items-center gap-3`}
                >
                   <div className="w-3 h-3 bg-green-500 rounded-full" />
                   <span className="font-mono text-sm">{t.hero.video_file}</span>
                </motion.div>

                {/* Main Image Container */}
                <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl shadow-violet-500/10 bg-gray-900 group">
                    <img 
                        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" 
                        alt="Video Editing Workspace" 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                    
                    {/* UI Overlay Mockup */}
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex gap-2 mb-4" dir="ltr">
                            <div className="h-1 bg-white/20 flex-1 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="h-full bg-violet-500" 
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-end" dir="ltr">
                            <div>
                                <h3 className="text-white font-bold text-xl">Viral_Cut_v3.prproj</h3>
                                <p className="text-gray-400 text-sm">{t.hero.exporting}</p>
                            </div>
                            <div className="px-3 py-1 bg-white/10 rounded text-xs font-mono">00:00:14:22</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};