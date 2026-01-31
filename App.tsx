import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const { dir } = useLanguage();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-brand-dark selection:bg-purple-500/30 overflow-x-hidden ${dir === 'rtl' ? 'font-sans' : ''}`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 origin-left z-50"
        style={{ scaleX, transformOrigin: dir === 'rtl' ? 'right' : 'left' }}
      />

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-violet-600/20 blur-xl absolute inset-0" />
              <h1 className="text-4xl font-display font-bold text-white relative z-10 tracking-tighter">
                MB<span className="text-violet-500">.</span>
              </h1>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <Hero />
            <Stats />
            <Services />
            <Portfolio />
            <About />
            <CTA />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Background ambient light */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-900/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;