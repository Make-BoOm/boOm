// === main.js ===
// ملف الأنيميشنات والتفاعلات لموقع Make BoOm

document.addEventListener('DOMContentLoaded', function() {
    
    // === 1. إخفاء شاشة التحميل بعد 2 ثانية ===
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            gsap.to(preloader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    preloader.style.display = 'none';
                    
                    // بدء الأنيميشنات بعد تحميل الصفحة
                    initAnimations();
                }
            });
        }
    }, 2000);
    
    // === 2. تهيئة كل الأنيميشنات ===
    function initAnimations() {
        // أنيميشن شريط التنقل عند التمرير
        animateNavbar();
        
        // أنيميشن الأرقام المتزايدة
        animateNumbers();
        
        // أنيميشن العناصر عند الظهور
        animateOnScroll();
        
        // فلتر معرض الأعمال
        initPortfolioFilter();
        
        // نموذج الاتصال
        initContactForm();
        
        // 3D Background (بسيط)
        init3DBackground();
        
        // تحديث السنة الحالية
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }
    
    // === 3. أنيميشن شريط التنقل ===
    function animateNavbar() {
        const header = document.querySelector('header');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('shadow-lg', 'py-3');
                header.classList.remove('py-4');
                
                if (currentScroll > lastScroll && currentScroll > 200) {
                    // التمرير لأسفل
                    gsap.to(header, { y: -100, duration: 0.3 });
                } else {
                    // التمرير لأعلى
                    gsap.to(header, { y: 0, duration: 0.3 });
                }
            } else {
                header.classList.remove('shadow-lg', 'py-3');
                header.classList.add('py-4');
                gsap.to(header, { y: 0, duration: 0.3 });
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // === 4. أنيميشن الأرقام المتزايدة ===
    function animateNumbers() {
        const counters = document.querySelectorAll('[data-count]');
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const suffix = counter.textContent.includes('M') ? 'M' : '';
            const duration = 2000; // 2 ثانية
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += step;
                    if (current > target) current = target;
                    
                    counter.textContent = suffix === 'M' 
                        ? (current / 1000000).toFixed(0) + suffix 
                        : Math.floor(current) + suffix;
                    
                    requestAnimationFrame(updateCounter);
                }
            };
            
            // بدء العد عند ظهور العنصر
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.unobserve(counter);
                }
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    
    // === 5. أنيميشن العناصر عند التمرير ===
    function animateOnScroll() {
        // عناصر لتحريكها
        const animateElements = document.querySelectorAll('.service-card, .portfolio-item, h2, h3, p');
        
        animateElements.forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            });
        });
        
        // أنيميشن خاص للكلمات المؤثرة
        const impactWords = document.querySelectorAll('.word-impact');
        impactWords.forEach(word => {
            gsap.to(word, {
                scrollTrigger: {
                    trigger: word,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                scale: 1.1,
                duration: 0.5,
                yoyo: true,
                repeat: 1
            });
        });
    }
    
    // === 6. فلتر معرض الأعمال ===
    function initPortfolioFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // إزالة النشاط من كل الأزرار
                filterBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
                filterBtns.forEach(b => b.classList.add('glass'));
                
                // إضافة النشاط للزر المختار
                this.classList.add('active', 'bg-primary', 'text-white');
                this.classList.remove('glass');
                
                // فلتر العناصر
                const filter = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        gsap.to(item, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.5,
                            display: 'block'
                        });
                    } else {
                        gsap.to(item, {
                            opacity: 0,
                            scale: 0.8,
                            duration: 0.5,
                            display: 'none'
                        });
                    }
                });
            });
        });
    }
    
    // === 7. نموذج الاتصال ===
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        const quickOrderBtn = document.getElementById('quick-order');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // هنا يمكنك إضافة كود إرسال النموذج إلى البريد أو قاعدة البيانات
                
                // تأثير عند الإرسال
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-check"></i> تم الإرسال!';
                submitBtn.classList.add('bg-green-600', 'from-green-600', 'to-green-500');
                submitBtn.classList.remove('from-primary', 'to-secondary');
                
                // إظهار رسالة نجاح
                gsap.to(submitBtn, {
                    scale: 1.1,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        setTimeout(() => {
                            submitBtn.innerHTML = originalText;
                            submitBtn.classList.remove('bg-green-600', 'from-green-600', 'to-green-500');
                            submitBtn.classList.add('from-primary', 'to-secondary');
                            contactForm.reset();
                        }, 2000);
                    }
                });
                
                // أنيميشن إشعار
                createNotification('تم استلام طلبك بنجاح! سنتواصل معك خلال 24 ساعة.', 'success');
            });
        }
        
        // زر الطلب السريع
        if (quickOrderBtn) {
            quickOrderBtn.addEventListener('click', function() {
                // أنيميشن الزر
                gsap.to(this, {
                    scale: 0.9,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1
                });
                
                // توجيه مباشر لواتساب
                setTimeout(() => {
                    window.open('https://wa.me/20123456789?text=أريد%20طلب%20خدمة%20سريعة%20من%20Make%20BoOm', '_blank');
                }, 500);
                
                // إشعار
                createNotification('جاري توجيهك لمحادثة واتساب...', 'info');
            });
        }
    }
    
    // === 8. خلفية 3D مبسطة ===
    function init3DBackground() {
        const container = document.getElementById('three-container');
        
        if (container && typeof THREE !== 'undefined') {
            // إعداد المشهد
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            container.appendChild(renderer.domElement);
            
            // إضافة أشكال هندسية
            const geometry = new THREE.IcosahedronGeometry(1, 0);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0x7C3AED,
                wireframe: true,
                transparent: true,
                opacity: 0.1
            });
            
            const shapes = [];
            for (let i = 0; i < 5; i++) {
                const shape = new THREE.Mesh(geometry, material);
                shape.position.x = (Math.random() - 0.5) * 10;
                shape.position.y = (Math.random() - 0.5) * 10;
                shape.position.z = (Math.random() - 0.5) * 10;
                shape.scale.setScalar(Math.random() * 2 + 0.5);
                scene.add(shape);
                shapes.push(shape);
            }
            
            camera.position.z = 5;
            
            // الأنيميشن
            function animate() {
                requestAnimationFrame(animate);
                
                shapes.forEach((shape, i) => {
                    shape.rotation.x += 0.005;
                    shape.rotation.y += 0.005;
                    shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
                });
                
                renderer.render(scene, camera);
            }
            
            animate();
            
            // تكبير عند تغيير حجم النافذة
            window.addEventListener('resize', () => {
                camera.aspect = container.offsetWidth / container.offsetHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.offsetWidth, container.offsetHeight);
            });
        }
    }
    
    // === 9. وظيفة إنشاء الإشعارات ===
    function createNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-2xl max-w-sm transform translate-x-full ${type === 'success' ? 'bg-green-900/90 border-l-4 border-green-500' : 'bg-blue-900/90 border-l-4 border-blue-500'}`;
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'} text-xl mr-3"></i>
                <div>
                    <p class="font-bold">${type === 'success' ? 'تم بنجاح!' : 'تنبيه'}</p>
                    <p class="text-sm opacity-90">${message}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // أنيميشن الدخول
        gsap.to(notification, {
            x: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        
        // إخفاء بعد 5 ثوان
        setTimeout(() => {
            gsap.to(notification, {
                x: 500,
                duration: 0.5,
                onComplete: () => {
                    notification.remove();
                }
            });
        }, 5000);
    }
    
    // === 10. تأثيرات إضافية عند التمرير ===
    // إضافة تأثيرات للعناصر عند التمرير
    gsap.registerPlugin(ScrollTrigger);
    
    // تأثير التلاشي للعناصر
    gsap.utils.toArray('.fade-in').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 90%'
            },
            opacity: 0,
            y: 30,
            duration: 1
        });
    });
    
    // تأثير للشعار في الهيدر
    const logo = document.querySelector('header .flex.items-center');
    if (logo) {
        ScrollTrigger.create({
            start: 'top -100',
            end: 99999,
            onUpdate: (self) => {
                if (self.progress > 0.1) {
                    gsap.to(logo, { scale: 0.8, duration: 0.3 });
                } else {
                    gsap.to(logo, { scale: 1, duration: 0.3 });
                }
            }
        });
    }
    
    // === 11. تهيئة القائمة المتنقلة للموبايل ===
    const mobileMenuBtn = document.getElementById('mobile-menu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const nav = document.querySelector('nav.hidden.md\\:flex');
            if (nav) {
                nav.classList.toggle('mobile-show');
                
                // أنيميشن للقائمة
                if (nav.classList.contains('mobile-show')) {
                    gsap.from(nav, {
                        y: -20,
                        opacity: 0,
                        duration: 0.3
                    });
                    nav.style.display = 'flex';
                    nav.style.flexDirection = 'column';
                    nav.style.position = 'absolute';
                    nav.style.top = '100%';
                    nav.style.left = '0';
                    nav.style.right = '0';
                    nav.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                    nav.style.backdropFilter = 'blur(10px)';
                    nav.style.padding = '2rem';
                } else {
                    nav.style.display = 'none';
                }
            }
        });
    }
    
    // === 12. تأثيرات Hover للبطاقات ===
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.03,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});