// ====================
// Mobile Menu Toggle
// ====================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navMenu.classList.toggle('nav-active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link:not(.dropbtn), .dropdown-content a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('nav-active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Mobile dropdown toggle
    const dropBtn = document.querySelector('.dropbtn');
    if (dropBtn) {
        dropBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = dropBtn.closest('.dropdown');
                if (dropdown) {
                    dropdown.classList.toggle('open');
                }
            }
        });
    }
}

// ====================
// Smooth Scrolling Navigation
// ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        // Avoid error for bare '#' or '#!'
        if (targetId && targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else if (targetId === '#') {
            e.preventDefault();
        }
    });
});

// ====================
// Intersection Observer for Scroll Animations
// ====================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in
document.querySelectorAll(
    '.about, .experience, .education, .contact, .hero-content, .hero-badge, ' +
    '.hero-title, .hero-subtitle, .hero-description, .hero-buttons, .hero-socials, ' +
    '.hero-visual, .education-card, .contact-card, .gallery-card'
).forEach(el => {
    el.classList.add('fade-in');
    fadeInObserver.observe(el);
});

// ====================
// Navbar Scroll Effect
// ====================
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ====================
// Active Navigation Link
// ====================
const sections = document.querySelectorAll('section[id]');
const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

function highlightNavigation() {
    // If on a subpage, mark matching link
    let hasSubpageActive = false;
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath && !linkPath.startsWith('#')) {
            const normalizedLinkPath = linkPath.replace(/\/$/, '') || '/';
            if (normalizedLinkPath === currentPath && currentPath !== '/') {
                link.classList.add('active');
                hasSubpageActive = true;
                const parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    const dropBtn = parentDropdown.querySelector('.dropbtn');
                    if (dropBtn) dropBtn.classList.add('active');
                }
            }
        }
    });

    if (hasSubpageActive) return;

    // Home page section scroll spy
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `#${sectionId}` || href === `/#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);

// ====================
// Timeline Items Animation on Scroll
// ====================
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});

// ====================
// Console Easter Egg
// ====================
console.log('%c👋 Hey there!', 'font-size: 20px; color: #5BAA6F; font-weight: bold;');
console.log('%cThanks for visiting Angga Prawira\'s portfolio!', 'font-size: 14px; color: #2D3E3D;');
console.log('%cGet in touch: anggaprawira5.0@outlook.com', 'font-size: 12px; color: #5A6F6B;');
