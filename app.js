// ==========================================================================
// ZARD FanClub in KOREA - Clean Modern Site
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initScrollObserver();
    initMobileNav();
});

/* ==========================================================================
   Scroll Animation Observer
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
   Mobile Navigation
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
