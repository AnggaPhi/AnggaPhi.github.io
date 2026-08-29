// ====================
// Smooth Scrolling Navigation
// ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
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
            // Keep observing in case user scrolls back up
        }
    });
}, observerOptions);

// Observe sections for fade-in animations
document.querySelectorAll('.about, .experience, .education, .contact, .hero-content, .hero-badge, .hero-title, .hero-subtitle, .hero-description, .hero-buttons, .hero-socials, .hero-visual, .education-card, .contact-card').forEach(section => {
    section.classList.add('fade-in');
    fadeInObserver.observe(section);
});

// ====================
// Navbar Scroll Effect
// ====================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(127, 205, 145, 0.15)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ====================
// Active Navigation Link
// ====================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
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
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
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
console.log('%c👋 Hey there!', 'font-size: 20px; color: #7FCD91; font-weight: bold;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #5A6F6B;');
console.log('%cFeel free to reach out: anggaprawira5.0@outlook.com', 'font-size: 12px; color: #7D9490;');
