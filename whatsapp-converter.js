// WhatsApp Conversion Optimizer
class WhatsAppConverter {
    constructor() {
        this.conversionRate = 0;
        this.init();
    }

    init() {
        this.trackClicks();
        this.optimizeMessages();
        this.addSmartCTAs();
        this.initExitIntent();
        this.addTimeSensitiveOffers();
        this.initAbandonedCart();
    }

    trackClicks() {
        // Track all WhatsApp button clicks
        document.addEventListener('click', (e) => {
            let target = e.target;
            let isWhatsAppButton = false;

            // Check if clicked element or its parent is a WhatsApp button
            while (target && target !== document) {
                if (target.href && target.href.includes('whatsapp') ||
                    target.classList.contains('whatsapp-btn') ||
                    target.classList.contains('whatsapp-cta') ||
                    target.classList.contains('whatsapp-package-btn')) {
                    isWhatsAppButton = true;
                    break;
                }
                target = target.parentElement;
            }

            if (isWhatsAppButton) {
                this.logConversion('whatsapp_click', {
                    element: target.textContent || target.className,
                    url: target.href || window.location.href,
                    timestamp: new Date().toISOString()
                });

                // Show confirmation animation
                this.showConfirmation();
            }
        });
    }

    optimizeMessages() {
        // Optimize WhatsApp messages based on user behavior
        const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"]');
        
        whatsappLinks.forEach(link => {
            const originalHref = link.href;
            const optimizedMessage = this.getOptimizedMessage(link);
            
            if (optimizedMessage !== originalHref) {
                link.href = optimizedMessage;
                
                // Add click tracking
                link.addEventListener('click', () => {
                    this.trackOptimizedMessage(optimizedMessage);
                });
            }
        });
    }

    getOptimizedMessage(link) {
        const time = new Date().getHours();
        let greeting = 'مرحباً';
        
        if (time < 12) greeting = 'صباح الخير';
        else if (time < 18) greeting = 'مساء الخير';
        else greeting = 'مساء النور';

        const page = window.location.pathname;
        let service = '';
        
        if (page.includes('services')) service = 'الخدمات';
        else if (page.includes('packages')) service = 'الباقات';
        else if (page.includes('portfolio')) service = 'معرض الأعمال';
        else service = 'الموقع';

        // Get user's preferred language
        const lang = navigator.language.startsWith('ar') ? 'ar' : 'en';
        
        // Base message
        let baseMessage = `${greeting} Make BoOm! أود الاستفسار عن ${service}`;
        
        // Add emoji based on time
        const emoji = time < 12 ? '🌅' : time < 18 ? '☀️' : '🌙';
        baseMessage = `${emoji} ${baseMessage}`;

        // Add urgency for packages page
        if (page.includes('packages')) {
            baseMessage += ' - أريد الاشتراك اليوم! 🚀';
        }

        // Encode message
        const encodedMessage = encodeURIComponent(baseMessage);
        return `https://wa.me/20123456789?text=${encodedMessage}`;
    }

    addSmartCTAs() {
        // Add smart CTAs based on scroll depth
        let scrollDepth = 0;
        let ctaShown = false;

        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollDepth = Math.max(scrollDepth, scrollPercent);

            // Show special CTA at 70% scroll depth
            if (scrollDepth >= 70 && !ctaShown) {
                this.showScrollCTA();
                ctaShown = true;
            }
        });

        // Show CTA after 30 seconds on page
        setTimeout(() => {
            this.showTimeBasedCTA();
        }, 30000);
    }

    showScrollCTA() {
        const cta = document.createElement('div');
        cta.className = 'fixed bottom-24 right-8 z-40 animate__animated animate__bounceInUp';
        cta.innerHTML = `
            <div class="bg-gradient-to-r from-premium-gold to-premium-coral p-6 rounded-2xl shadow-2xl max-w-sm">
                <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 bg-premium-navy rounded-full flex items-center justify-center">
                        <i class="fas fa-gift text-premium-gold text-xl"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-bold text-premium-navy">عرض خاص! 🎁</h4>
                        <p class="text-sm text-premium-navy/80">استشارة مجانية + خصم 20% لأول طلب</p>
                    </div>
                </div>
                <a href="https://wa.me/20123456789?text=أريد%20الاستفادة%20من%20العرض%20الخاص%20🎁%20استشارة%20مجانية%20+%20خصم%2020%25"
                   target="_blank"
                   class="block w-full bg-premium-navy text-white py-3 rounded-xl font-bold text-center hover:bg-opacity-90 transition-all">
                   احصل على العرض الآن
                </a>
                <button class="absolute -top-2 -left-2 w-6 h-6 bg-premium-navy text-white rounded-full text-xs" onclick="this.parentElement.parentElement.remove()">
                    ✕
                </button>
            </div>
        `;

        document.body.appendChild(cta);

        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (cta.parentElement) {
                cta.classList.add('animate__bounceOutDown');
                setTimeout(() => {
                    if (cta.parentElement) {
                        cta.parentElement.removeChild(cta);
                    }
                }, 500);
            }
        }, 10000);
    }

    showTimeBasedCTA() {
        // Only show if user hasn't clicked any WhatsApp button yet
        if (this.conversionRate === 0) {
            const cta = document.createElement('div');
            cta.className = 'fixed top-24 left-1/2 transform -translate-x-1/2 z-40 animate__animated animate__slideInDown';
            cta.innerHTML = `
                <div class="bg-premium-navy border-l-4 border-premium-gold p-4 rounded-r-xl shadow-2xl">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-clock text-premium-gold text-xl"></i>
                        <div>
                            <p class="font-bold text-white">هل تحتاج مساعدة في اختيار الخدمة المناسبة؟</p>
                            <p class="text-sm text-white/70">محادثة سريعة على واتساب قد تكون الحل!</p>
                        </div>
                        <a href="https://wa.me/20123456789?text=أحتاج%20مساعدتكم%20في%20اختيار%20الخدمة%20المناسبة%20⏰"
                           target="_blank"
                           class="bg-premium-gold text-premium-navy px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all">
                           نعم، أريد مساعدة
                        </a>
                    </div>
                </div>
            `;

            document.body.appendChild(cta);

            // Auto-remove after 8 seconds
            setTimeout(() => {
                if (cta.parentElement) {
                    cta.classList.add('animate__slideOutUp');
                    setTimeout(() => {
                        if (cta.parentElement) {
                            cta.parentElement.removeChild(cta);
                        }
                    }, 500);
                }
            }, 8000);
        }
    }

    initExitIntent() {
        // Track mouse movement for exit intent
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseY = e.clientY;
        });

        document.addEventListener('mouseleave', (e) => {
            if (mouseY < 50 && this.conversionRate === 0) {
                this.showExitIntentPopup();
            }
        });
    }

    showExitIntentPopup() {
        const popup = document.createElement('div');
        popup.className = 'fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4';
        popup.innerHTML = `
            <div class="bg-gradient-to-b from-premium-navy to-premium-purple rounded-3xl p-8 max-w-md relative animate__animated animate__zoomIn">
                <button class="absolute top-4 left-4 text-white/70 hover:text-white" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times text-2xl"></i>
                </button>
                
                <div class="text-center mb-6">
                    <div class="w-20 h-20 bg-gradient-to-r from-premium-gold to-premium-coral rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-gift text-2xl text-premium-navy"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-2">لا تذهب قبل الحصول على هديتك! 🎁</h3>
                    <p class="text-white/70">احصل على استشارة مجانية + خطة عمل مبدئية عند تواصلك معنا الآن</p>
                </div>
                
                <div class="space-y-4">
                    <a href="https://wa.me/20123456789?text=أريد%20الاستفادة%20من%20الاستشارة%20المجانية%20🎁"
                       target="_blank"
                       class="block w-full bg-gradient-to-r from-premium-gold to-premium-coral text-premium-navy py-4 rounded-xl font-bold text-center hover:shadow-xl transition-all">
                       <i class="fab fa-whatsapp ml-2"></i> احصل على الاستشارة المجانية
                    </a>
                    
                    <button onclick="this.parentElement.parentElement.remove()" 
                            class="block w-full bg-white/10 text-white py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                        شكراً، سأعود لاحقاً
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(popup);
        document.body.style.overflow = 'hidden';

        // Close on background click
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.remove();
                document.body.style.overflow = 'auto';
            }
        });
    }

    addTimeSensitiveOffers() {
        // Show time-sensitive offers based on time of day
        const hour = new Date().getHours();
        
        if (hour >= 9 && hour <= 17) { // Business hours
            this.showBusinessHoursOffer();
        } else if (hour >= 18 && hour <= 22) { // Evening
            this.showEveningOffer();
        } else { // Night
            this.showNightOffer();
        }
    }

    showBusinessHoursOffer() {
        const offer = document.createElement('div');
        offer.className = 'fixed top-4 right-4 z-40 animate__animated animate__slideInRight';
        offer.innerHTML = `
            <div class="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl shadow-lg">
                <div class="flex items-center space-x-3">
                    <i class="fas fa-bolt"></i>
                    <div>
                        <p class="font-bold">رد سريع خلال دقائق! ⚡</p>
                        <p class="text-sm opacity-90">فريقنا جاهز للرد عليك الآن</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(offer);

        setTimeout(() => {
            if (offer.parentElement) {
                offer.classList.add('animate__slideOutRight');
                setTimeout(() => {
                    if (offer.parentElement) {
                        offer.parentElement.removeChild(offer);
                    }
                }, 500);
            }
        }, 5000);
    }

    showEveningOffer() {
        // Evening offers
        console.log('Evening offer logic here');
    }

    showNightOffer() {
        // Night offers
        console.log('Night offer logic here');
    }

    initAbandonedCart() {
        // Track if user viewed packages but didn't click
        let packageViewed = false;
        let packageTimer;

        // Observe package section
        const packageSection = document.getElementById('packages');
        if (packageSection) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    packageViewed = true;
                    
                    // Set timer for abandoned cart
                    packageTimer = setTimeout(() => {
                        if (packageViewed && this.conversionRate === 0) {
                            this.showAbandonedCartReminder();
                        }
                    }, 60000); // 1 minute
                }
            }, { threshold: 0.5 });

            observer.observe(packageSection);
        }

        // Clear timer if user clicks WhatsApp button
        document.addEventListener('click', (e) => {
            if (e.target.closest('[href*="whatsapp"]')) {
                clearTimeout(packageTimer);
                packageViewed = false;
            }
        });
    }

    showAbandonedCartReminder() {
        const reminder = document.createElement('div');
        reminder.className = 'fixed bottom-32 right-8 z-40 animate__animated animate__bounceIn';
        reminder.innerHTML = `
            <div class="bg-premium-navy border-r-4 border-premium-gold p-4 rounded-l-xl shadow-2xl">
                <div class="flex items-center space-x-3">
                    <i class="fas fa-shopping-cart text-premium-gold"></i>
                    <div>
                        <p class="font-bold text-white">هل ما زلت تفكر في الباقة؟ 🤔</p>
                        <p class="text-sm text-white/70">اسألنا عن أي استفسار قبل الشراء</p>
                    </div>
                    <a href="https://wa.me/20123456789?text=عندي%20استفسار%20بخصوص%20الباقات%20🤔"
                       target="_blank"
                       class="bg-premium-gold text-premium-navy px-3 py-1 rounded-lg text-sm font-bold hover:opacity-90 transition-all">
                       اسأل الآن
                    </a>
                </div>
            </div>
        `;

        document.body.appendChild(reminder);

        setTimeout(() => {
            if (reminder.parentElement) {
                reminder.classList.add('animate__bounceOut');
                setTimeout(() => {
                    if (reminder.parentElement) {
                        reminder.parentElement.removeChild(reminder);
                    }
                }, 500);
            }
        }, 10000);
    }

    showConfirmation() {
        // Show confirmation animation
        const confetti = document.createElement('div');
        confetti.className = 'fixed inset-0 pointer-events-none z-50';
        confetti.innerHTML = `
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate__animated animate__bounceIn">
                        <i class="fab fa-whatsapp text-3xl text-white"></i>
                    </div>
                    <p class="text-white font-bold text-xl bg-black/50 px-4 py-2 rounded-lg">جاري التوجيه إلى واتساب... 🚀</p>
                </div>
            </div>
        `;

        document.body.appendChild(confetti);

        // Add confetti particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-2 h-2 rounded-full';
            particle.style.cssText = `
                background: ${i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#6A0DAD' : '#008080'};
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: confetti ${Math.random() * 1 + 0.5}s ease-out forwards;
            `;

            const angle = Math.random() * Math.PI * 2;
            const velocity = 100 + Math.random() * 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            particle.style.opacity = '0';

            confetti.appendChild(particle);
        }

        // Add confetti animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes confetti {
                0% {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Remove after animation
        setTimeout(() => {
            confetti.remove();
            style.remove();
        }, 1500);
    }

    logConversion(type, data) {
        // Log conversion to localStorage
        const conversions = JSON.parse(localStorage.getItem('whatsapp_conversions') || '[]');
        conversions.push({
            type,
            data,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('whatsapp_conversions', JSON.stringify(conversions));

        // Update conversion rate
        this.conversionRate = conversions.length;
        
        // You can send this data to your analytics service here
        console.log('Conversion logged:', { type, data, conversions: this.conversionRate });
    }

    trackOptimizedMessage(message) {
        console.log('Optimized message sent:', message);
        // Track which optimized messages perform best
    }
}

// Initialize converter
document.addEventListener('DOMContentLoaded', () => {
    new WhatsAppConverter();
});