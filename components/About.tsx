import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Fingerprint, Sparkles, Cpu } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const About: React.FC = () => {
    const { t, dir } = useLanguage();

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-brand-dark">
            {/* Background Decor */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-violet-900/10 to-transparent pointer-events-none" />
            <div className="absolute left-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 text-violet-300 text-sm font-semibold tracking-wide">
                            <Cpu className="w-4 h-4" />
                            <span>{t.about.heading}</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                            {t.about.subheading}
                            <span className="block text-gradient-purple mt-2">
                                {dir === 'rtl' ? 'الذكاء الاصطناعي.. بلمسة إنسانية.' : "Artificial Intelligence... With a Human Soul."}
                            </span>
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-2 border-violet-500/30 pl-6 dark:border-violet-500/30 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-6">
                            {t.about.desc}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                <BrainCircuit className="w-8 h-8 text-fuchsia-400 mb-3" />
                                <h4 className="font-bold text-white mb-1">{dir === 'rtl' ? 'ذكاء اصطناعي' : 'AI Powered'}</h4>
                                <p className="text-sm text-gray-400">{dir === 'rtl' ? 'تحليل دقيق للبيانات' : 'Data-Driven Insights'}</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                <Fingerprint className="w-8 h-8 text-violet-400 mb-3" />
                                <h4 className="font-bold text-white mb-1">{dir === 'rtl' ? 'لمسة بشرية' : 'Human Touch'}</h4>
                                <p className="text-sm text-gray-400">{dir === 'rtl' ? 'إبداع وعاطفة حقيقية' : 'Authentic Creativity'}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-full opacity-20 blur-3xl animate-pulse" />

                            {/* Main Glass Card */}
                            <div className="glass-card absolute inset-4 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-black/40">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                                <div className="relative z-10 text-center p-8">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-[2px]">
                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                            <Sparkles className="w-10 h-10 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Smart Systems</h3>
                                    <div className="flex gap-2 justify-center mt-4">
                                        <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: '0s' }} />
                                        <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.4s' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 p-4 glass-card rounded-2xl border border-white/10 bg-black/60 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Growth</div>
                                        <div className="font-bold text-white">+240%</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-6 -left-6 p-4 glass-card rounded-2xl border border-white/10 bg-black/60 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <Cpu className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">AI Analysis</div>
                                        <div className="font-bold text-white">Active</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
