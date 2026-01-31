import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, Share2, Palette, Crown, ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Services: React.FC = () => {
  const { t, dir } = useLanguage();

  const services = [
    {
      icon: <Clapperboard className="w-8 h-8 text-violet-400" />,
      title: t.services.cards.editing.title,
      description: t.services.cards.editing.desc,
      gradient: "from-violet-500/20 to-purple-500/5",
      isGold: false
    },
    {
      icon: <Share2 className="w-8 h-8 text-fuchsia-400" />,
      title: t.services.cards.distribution.title,
      description: t.services.cards.distribution.desc,
      gradient: "from-fuchsia-500/20 to-pink-500/5",
      isGold: false
    },
    {
      icon: <Palette className="w-8 h-8 text-cyan-400" />,
      title: t.services.cards.identity.title,
      description: t.services.cards.identity.desc,
      gradient: "from-cyan-500/20 to-blue-500/5",
      isGold: false
    },
    {
      icon: <Crown className="w-8 h-8 text-yellow-900" />,
      title: t.services.cards.boom.title,
      description: t.services.cards.boom.desc,
      gradient: "from-yellow-500 via-yellow-300 to-yellow-600",
      isGold: true
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{t.services.heading} <br /><span className="text-gradient">{t.services.headingSpan}</span></h2>
            <p className="text-gray-400 text-lg">{t.services.subheading}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block mb-2"
          >
            <span className="text-sm font-mono text-gray-500">{t.services.manifest}</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-8 rounded-3xl border ${service.isGold ? 'border-yellow-500/50 bg-gold-gradient text-black' : 'border-white/5 bg-gradient-to-br ' + service.gradient + ' text-white backdrop-blur-sm'} overflow-hidden`}
            >
              {service.isGold && (
                <div className="absolute top-4 right-4 bg-black/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-black/10">
                  {t.services.cards.boom.tag}
                </div>
              )}

              <div className={`absolute top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                {dir === 'rtl' ? <ArrowUpLeft className={`w-6 h-6 ${service.isGold ? 'text-black' : 'text-white'}`} /> : <ArrowUpRight className={`w-6 h-6 ${service.isGold ? 'text-black' : 'text-white'}`} />}
              </div>
              
              <div className="relative z-10">
                <div className={`mb-6 p-3 w-fit rounded-xl border backdrop-blur-md ${service.isGold ? 'bg-white/30 border-black/10' : 'bg-white/5 border-white/10'}`}>
                    {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${service.isGold ? 'text-black' : 'text-white'}`}>{service.title}</h3>
                <p className={`leading-relaxed max-w-sm ${service.isGold ? 'text-black/80 font-medium' : 'text-gray-400'}`}>
                  {service.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${service.isGold ? 'bg-white/40' : 'bg-white/10 group-hover:bg-white/20'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};