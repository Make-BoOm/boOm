import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/201000000000";

  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <h2 className="text-2xl font-display font-bold text-white mb-4">MakeBoom.</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
            <div>
              <h4 className="text-white font-bold mb-6">{t.footer.services_title}</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-violet-400 transition-colors">{t.services.cards.editing.title}</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">{t.services.cards.distribution.title}</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">{t.services.cards.identity.title}</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors font-bold text-yellow-500">The BOOM</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">{t.footer.company_title}</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-violet-400 transition-colors">{t.nav.about}</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">{t.footer.terms}</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">{t.footer.privacy}</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
               <h4 className="text-white font-bold mb-6">{t.footer.socials_title}</h4>
               <div className="flex gap-4">
                 {/* WhatsApp */}
                 <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20 hover:bg-green-500 hover:text-white transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                 </a>
                 
                 {/* Instagram */}
                 <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 border border-pink-500/20 hover:bg-pink-500 hover:text-white transition-colors">
                   <Instagram className="w-5 h-5" />
                 </a>

                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-violet-600 transition-colors">
                   <Youtube className="w-5 h-5" />
                 </a>
               </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#">{t.footer.terms}</a>
            <a href="#">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};