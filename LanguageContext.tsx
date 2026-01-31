import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    nav: {
      services: string;
      work: string;
      about: string;
      start: string;
      contact: string;
    };
    hero: {
      badge: string;
      title: string;
      titleSpan: string;
      desc: string;
      cta_primary: string;
      cta_secondary: string;
      video_file: string;
      exporting: string;
    };
    stats: {
      views: string;
      content: string;
      brands: string;
      reach: string;
    };
    services: {
      heading: string;
      headingSpan: string;
      subheading: string;
      manifest: string;
      cards: {
        editing: { title: string; desc: string };
        distribution: { title: string; desc: string };
        identity: { title: string; desc: string };
        boom: { title: string; desc: string; tag: string };
      }
    };
    portfolio: {
      heading: string;
      headingSpan: string;
      desc: string;
      viewAll: string;
    };
    cta: {
      heading: string;
      headingSpan: string;
      desc: string;
      placeholder: string;
      button: string;
      spam: string;
    };
    about: {
      heading: string;
      subheading: string;
      desc: string;
    };
    footer: {
      desc: string;
      services_title: string;
      company_title: string;
      socials_title: string;
      rights: string;
      terms: string;
      privacy: string;
    };
  };
}

const translations: Translations = {
  en: {
    nav: {
      services: 'Services',
      work: 'Work',
      about: 'About',
      start: 'Start Project',
      contact: "Let's Talk"
    },
    hero: {
      badge: 'Accepting New Clients',
      title: 'Ignite Your Brand With',
      titleSpan: 'Viral Video.',
      desc: 'We transform raw footage into cultural movements. Specialized editing, content distribution, and visual identity for brands that refuse to be ignored.',
      cta_primary: 'Start Your Project',
      cta_secondary: 'View Showreel',
      video_file: 'render_complete.mp4',
      exporting: 'Exporting...'
    },
    stats: {
      views: 'Views Generated',
      content: 'Content Pieces',
      brands: 'Brands Scaled',
      reach: 'Platform Reach'
    },
    services: {
      heading: 'Build Your',
      headingSpan: 'Digital Empire.',
      subheading: 'Comprehensive creative solutions for modern creators and brands.',
      manifest: 'EXCLUSIVE SERVICES',
      cards: {
        editing: {
          title: "Viral Video Editing",
          desc: "High-retention editing specifically designed for Reels, TikToks, and Shorts. We know what stops the scroll."
        },
        distribution: {
          title: "Content Distribution",
          desc: "Don't just post. Dominate. We strategize and deploy your content across all relevant platforms."
        },
        identity: {
          title: "Visual Identity",
          desc: "Thumbnails, channel art, and motion graphics that create a cohesive, premium look."
        },
        boom: {
          title: "The BOOM Package",
          desc: "The all-inclusive VIP solution. Strategy, Editing, Management, and Growth. We handle everything.",
          tag: "Most Popular"
        }
      }
    },
    portfolio: {
      heading: 'Selected',
      headingSpan: 'Works',
      desc: 'A curated selection of projects that broke the algorithm and set new standards.',
      viewAll: 'View All Projects'
    },
    cta: {
      heading: 'Ready to make some',
      headingSpan: 'Noise?',
      desc: "We're currently accepting new projects. Let's build something that stops the world from scrolling.",
      placeholder: 'Enter your email',
      button: 'Get Started',
      spam: 'No spam. Unsubscribe anytime.'
    },
    about: {
      heading: 'About',
      subheading: 'MakeBoom',
      desc: "We don't use AI to replace creativity; we use it to unleash it. At MakeBoom, we fuse human passion with cutting-edge AI systems for content distribution, brand building, and smart editing workflows. This synergy guarantees precision and speed while keeping the authentic spirit of your story distinct.",
    },
    footer: {
      desc: 'Premium video production and brand acceleration for the digital age. Based in Egypt & UAE, working globally.',
      services_title: 'Services',
      company_title: 'Company',
      socials_title: 'Socials',
      rights: 'MakeBoom Agency. All rights reserved.',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy'
    }
  },
  ar: {
    nav: {
      services: 'خدماتنا',
      work: 'أعمالنا',
      about: 'عن الشركة',
      start: 'ابدأ مشروعك',
      contact: "تواصل معنا"
    },
    hero: {
      badge: 'نستقبل عملاء جدد',
      title: 'انطلق بعلامتك التجارية مع',
      titleSpan: 'الفيديوهات الفيروسية.',
      desc: 'نحول اللقطات الخام إلى تريندات. تخصصنا المونتاج الاحترافي، ونشر المحتوى، وبناء الهوية البصرية للعلامات التجارية التي ترفض أن يتم تجاهلها.',
      cta_primary: 'تواصل معنا واتساب',
      cta_secondary: 'شاهد أعمالنا',
      video_file: 'تم_الرندر.mp4',
      exporting: 'جاري التصدير...'
    },
    stats: {
      views: 'مشاهدة محققة',
      content: 'قطعة محتوى',
      brands: 'علامة تجارية',
      reach: 'وصول للمنصات'
    },
    services: {
      heading: 'ابنِ إمبراطوريتك',
      headingSpan: 'الرقمية.',
      subheading: 'حلول إبداعية شاملة لصناع المحتوى والعلامات التجارية الحديثة.',
      manifest: 'خدماتنا المميزة',
      cards: {
        editing: {
          title: "مونتاج فيروسي (Viral)",
          desc: "مونتاج عالي الاحتفاظ بالجمهور مصمم خصيصاً للريلز، تيك توك، والشورتس. نعرف تماماً ما يوقف التمرير."
        },
        distribution: {
          title: "نشر وتوزيع المحتوى",
          desc: "لا تنشر فقط، بل سيطر. نضع استراتيجية وننشر محتواك عبر جميع المنصات للوصول لأقصى انتشار."
        },
        identity: {
          title: "الهوية البصرية",
          desc: "صور مصغرة (Thumbnails)، وتصاميم القناة، وجرافيك متحرك يخلق مظهراً متماسكاً وفخماً لعلامتك."
        },
        boom: {
          title: "باقة الـ BOOM (الشاملة)",
          desc: "الحل الذهبي الشامل. استراتيجية، مونتاج، إدارة، ونمو. نحن نتولى كل شيء وأنت تجني النتائج.",
          tag: "الأكثر طلباً"
        }
      }
    },
    portfolio: {
      heading: 'مختارات من',
      headingSpan: 'أعمالنا',
      desc: 'مجموعة مختارة من المشاريع التي كسرت الخوارزميات ووضعت معايير جديدة.',
      viewAll: 'شاهد كل المشاريع'
    },
    cta: {
      heading: 'جاهز لإحداث',
      headingSpan: 'ضجة؟',
      desc: "نستقبل حالياً مشاريع جديدة. دعنا نبني شيئاً يوقف العالم عن التمرير.",
      placeholder: 'أدخل بريدك الإلكتروني',
      button: 'تواصل واتساب',
      spam: 'لا نرسل بريداً مزعجاً.'
    },
    about: {
      heading: 'عن',
      subheading: 'MakeBoom',
      desc: 'نحن لا نستخدم الذكاء الاصطناعي لنستبدل الإبداع، بل لنطلقه. في MakeBoom، نمزج بين الشغف الفني وأحدث أنظمة الـ AI في توزيع المحتوى، بناء العلامات التجارية، وأنظمة المونتاج الذكية. هذا المزيج يضمن لك نتائج دقيقة، وسرعة خيالية، مع الحفاظ على الروح الحقيقية لقصتك.'
    },
    footer: {
      desc: 'إنتاج فيديو متميز وتسريع نمو العلامات التجارية للعصر الرقمي. مقرنا في مصر والخليج، ونعمل عالمياً.',
      services_title: 'الخدمات',
      company_title: 'الشركة',
      socials_title: 'تواصل معنا',
      rights: 'وكالة MakeBoom. جميع الحقوق محفوظة.',
      terms: 'شروط الخدمة',
      privacy: 'سياسة الخصوصية'
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations['en'];
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar'); // Default to Arabic for Egyptian market

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{
      language,
      toggleLanguage,
      t: translations[language],
      dir: language === 'ar' ? 'rtl' : 'ltr'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};