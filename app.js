// ==========================================================================
// ZARD FanClub in KOREA - 2026 Interactive Application
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initStars();
    initScrollObserver();
    initMobileNav();
    initHeaderScroll();
});

/* ==========================================================================
   1. Dynamic Twinkling Stars Background
   ========================================================================== */
function initStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    
    const starCount = 140;
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2.2 + 0.8;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 3.5 + 2;
        const delay = Math.random() * 5;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        
        fragment.appendChild(star);
    }
    
    container.appendChild(fragment);
}

/* ==========================================================================
   2. Scroll Animation Observer (Fade-In on Scroll)
   ========================================================================== */
function initScrollObserver() {
    const animElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -45px 0px'
    };
    
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   3. Mobile Navigation Menu
   ========================================================================== */
function initMobileNav() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.mobile-close-btn');
    const drawer = document.querySelector('.mobile-drawer');
    const drawerLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!menuBtn || !drawer) return;
    
    const openDrawer = () => drawer.classList.add('open');
    const closeDrawer = () => drawer.classList.remove('open');
    
    menuBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    
    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
    
    document.addEventListener('click', (e) => {
        if (drawer.classList.contains('open') && 
            !drawer.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            closeDrawer();
        }
    });
}

/* ==========================================================================
   4. Header Scroll Effect
   ========================================================================== */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 80) {
            header.style.background = 'rgba(3, 7, 18, 0.9)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        } else {
            header.style.background = 'rgba(3, 7, 18, 0.78)';
        }
        
        lastScroll = currentScroll;
    });
}
