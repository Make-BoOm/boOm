// Premium Animations for Make BoOm
class PremiumWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.hidePreloader();
        this.initNavbar();
        this.initAnimations();
        this.initServiceCards();
        this.initPackageTabs();
        this.initWhatsAppButtons();
        this.initScrollEffects();
        this.initParallax();
        this.initInteractiveElements();
        this.initCounters();
        this.initVideoPlayer();
    }

    hidePreloader() {
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                gsap.to(preloader, {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                        preloader.style.display = 'none';
                        this.triggerEntranceAnimation();
                    }
                });
            }
        }, 3000);
    }

    triggerEntranceAnimation() {
        // Animate hero elements
        gsap.from('#hero h1', {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.3
        });

        gsap.from('#hero p', {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out'
        });

        gsap.from('#hero .glass-premium', {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            delay: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        });

        gsap.from('#hero .whatsapp-cta', {
            scale: 0,
            rotation: -180,
            duration: 1,
            delay: 1.2,
            ease: 'elastic.out(1, 0.5)'
        });
    }

    initNavbar() {
        const navbar = document.getElementById('mainNav');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                navbar.classList.add('shadow-2xl', 'py-3');
                navbar.classList.remove('py-4');

                if (currentScroll > lastScroll && currentScroll > 200) {
                    // Scroll down
                    gsap.to(navbar, {
                        y: -100,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                } else {
                    // Scroll up
                    gsap.to(navbar, {
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            } else {
                navbar.classList.remove('shadow-2xl', 'py-3');
                navbar.classList.add('py-4');
            }

            lastScroll = currentScroll;
        });

        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                if (mobileMenu.classList.contains('h-0')) {
                    mobileMenu.classList.remove('h-0', 'opacity-0');
                    mobileMenu.classList.add('h-auto', 'opacity-100');
                    mobileMenu.style.height = 'auto';
                } else {
                    mobileMenu.classList.add('h-0', 'opacity-0');
                    mobileMenu.classList.remove('h-auto', 'opacity-100');
                    mobileMenu.style.height = '0';
                }
            });
        }
    }

    initAnimations() {
        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Animate on scroll
        gsap.utils.toArray('.service-card-interactive').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                x: i % 2 === 0 ? -100 : 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Animate package cards
        gsap.utils.toArray('.package-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: 'back.out(1.7)'
            });
        });

        // Text reveal animation
        gsap.utils.toArray('h2, h3').forEach((heading) => {
            gsap.from(heading, {
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 90%'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });
    }

    initServiceCards() {
        const serviceCards = document.querySelectorAll('.service-card-interactive');

        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out',
                    y: -10
                });

                // Animate icon
                const icon = card.querySelector('.w-20');
                if (icon) {
                    gsap.to(icon, {
                        rotation: 360,
                        duration: 0.8,
                        ease: 'power2.out'
                    });
                }
            });

            card.addEventListener('mouseleave', (e) => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                    y: 0
                });
            });

            // WhatsApp button animation
            const whatsappBtn = card.querySelector('.service-whatsapp-btn');
            if (whatsappBtn) {
                whatsappBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    // Ripple effect
                    const ripple = document.createElement('span');
                    const rect = whatsappBtn.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;

                    ripple.style.cssText = `
                        position: absolute;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.3);
                        width: ${size}px;
                        height: ${size}px;
                        left: ${x}px;
                        top: ${y}px;
                        transform: scale(0);
                        animation: ripple 0.6s linear;
                    `;

                    whatsappBtn.style.position = 'relative';
                    whatsappBtn.style.overflow = 'hidden';
                    whatsappBtn.appendChild(ripple);

                    setTimeout(() => {
                        ripple.remove();
                    }, 600);

                    // Open WhatsApp
                    setTimeout(() => {
                        const serviceName = card.querySelector('h3').textContent;
                        const message = `أهلاً 👋 أريد الاستفسار عن خدمة "${serviceName.trim()}"`;
                        const encodedMessage = encodeURIComponent(message);
                        window.open(`https://wa.me/20123456789?text=${encodedMessage}`, '_blank');
                    }, 300);
                });
            }
        });
    }

    initPackageTabs() {
        const tabs = document.querySelectorAll('.package-tab');
        const packagesContainer = document.getElementById('packagesContainer');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                tabs.forEach(t => t.classList.remove('active', 'bg-gradient-to-r', 'from-premium-gold', 'to-premium-coral', 'text-premium-navy'));
                tab.classList.add('active', 'bg-gradient-to-r', 'from-premium-gold', 'to-premium-coral', 'text-premium-navy');

                // Animate packages
                const packageType = tab.dataset.package;
                const packages = packagesContainer.querySelectorAll('.package-card');

                packages.forEach((pkg, index) => {
                    gsap.to(pkg, {
                        opacity: 0,
                        y: 50,
                        duration: 0.3,
                        onComplete: () => {
                            // Here you would typically filter packages based on type
                            // For demo, we'll just show all
                            gsap.to(pkg, {
                                opacity: 1,
                                y: 0,
                                duration: 0.3,
                                delay: index * 0.1
                            });
                        }
                    });
                });
            });
        });
    }

    initWhatsAppButtons() {
        // Add click tracking to all WhatsApp buttons
        const whatsappButtons = document.querySelectorAll('[href*="whatsapp"], .whatsapp-btn, .whatsapp-cta');

        whatsappButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Animation
                gsap.to(e.target, {
                    scale: 0.9,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1
                });

                // Track conversion
                this.trackConversion('whatsapp_click', e.target.textContent || 'WhatsApp Button');
            });
        });

        // Floating WhatsApp button interaction
        const floatBtn = document.getElementById('whatsappFloat');
        if (floatBtn) {
            floatBtn.addEventListener('mouseenter', () => {
                gsap.to(floatBtn, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'elastic.out(1, 0.5)'
                });
            });

            floatBtn.addEventListener('mouseleave', () => {
                gsap.to(floatBtn, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        }
    }

    initScrollEffects() {
        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.getElementById('hero');
            
            if (hero) {
                const rate = scrolled * -0.5;
                hero.style.transform = `translate3d(0, ${rate}px, 0)`;
            }

            // Animate elements on scroll
            this.animateOnScroll();
        });
    }

    initParallax() {
        // Create parallax layers
        const layers = document.querySelectorAll('.parallax-layer');
        
        layers.forEach(layer => {
            const depth = layer.dataset.depth || 0.5;
            
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * depth;
                layer.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    initInteractiveElements() {
        // Interactive logo
        const logo = document.getElementById('logo');
        if (logo) {
            logo.addEventListener('mouseenter', () => {
                gsap.to(logo.querySelector('.w-12'), {
                    rotation: 360,
                    duration: 1,
                    ease: 'power2.out'
                });
            });
        }

        // Video play button
        const playVideoBtn = document.getElementById('playVideo');
        if (playVideoBtn) {
            playVideoBtn.addEventListener('click', () => {
                // Create video modal
                this.createVideoModal();
            });
        }

        // Hover effects for all interactive elements
        const interactiveElements = document.querySelectorAll('.hover\\:scale-105, .hover\\:shadow-xl');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (el.classList.contains('ripple')) {
                    this.createRippleEffect(el);
                }
            });
        });
    }

    initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const suffix = counter.textContent.includes('مليون') ? '' : '';
            const duration = 2000;
            
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const increment = target / (duration / 16);
                    
                    const updateCounter = () => {
                        if (start < target) {
                            start += increment;
                            if (start > target) start = target;
                            
                            counter.textContent = Math.floor(start) + suffix;
                            requestAnimationFrame(updateCounter);
                        }
                    };
                    
                    updateCounter();
                    observer.unobserve(counter);
                }
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }

    initVideoPlayer() {
        // Video modal functionality
        window.showVideoModal = function(videoUrl) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="relative w-full max-w-4xl">
                    <button class="absolute -top-12 left-0 text-white text-2xl hover:text-premium-gold transition-colors" onclick="this.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="aspect-video bg-black rounded-2xl overflow-hidden">
                        <iframe src="${videoUrl}" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // Close on ESC
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                    document.body.style.overflow = 'auto';
                }
            });
        };
    }

    createVideoModal() {
        const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Replace with your video
        window.showVideoModal(videoUrl);
    }

    createRippleEffect(element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.8);
            
            if (isVisible && !el.classList.contains('animated')) {
                el.classList.add('animated');
                gsap.from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            }
        });
    }

    trackConversion(type, value) {
        // Here you would typically send this data to analytics
        console.log(`Conversion tracked: ${type} - ${value}`);
        
        // Example: Send to Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', type, {
                'event_category': 'conversion',
                'event_label': value
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PremiumWebsite();
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-spin-slow {
        animation: spin 20s linear infinite;
    }
    
    .animate-spin-slow-reverse {
        animation: spin 25s linear infinite reverse;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .animate-gradient-x {
        background-size: 200% auto;
        animation: gradient-x 3s ease infinite;
    }
    
    @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }
`;
document.head.appendChild(style);