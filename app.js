// ==========================================================================
// ZARD FanClub in KOREA - Stunning 2026 Interactive Site
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initParticles();
    initScrollObserver();
    initMobileNav();
});

/* ==========================================================================
   1. Canvas Particle System
   ========================================================================== */
function initParticles() {
    const canvas = document.getElementById('fx-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.fadeSpeed = Math.random() * 0.005 + 0.002;
            this.fadeDirection = 1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            this.opacity += this.fadeSpeed * this.fadeDirection;
            
            if (this.opacity >= 0.7) this.fadeDirection = -1;
            if (this.opacity <= 0.1) this.fadeDirection = 1;
            
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(148, 197, 255, ${this.opacity})`;
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(148, 197, 255, ${this.opacity * 0.2})`;
            ctx.fill();
        }
    }
    
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
}

/* ==========================================================================
   2. Scroll Animation Observer
   ========================================================================== */
function initScrollObserver() {
    const animElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
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
   3. Mobile Navigation
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
