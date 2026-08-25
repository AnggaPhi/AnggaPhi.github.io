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
document.querySelectorAll('.about, .experience, .education, .contact').forEach(section => {
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
// Typing Animation for Hero Badge (Optional Enhancement)
// ====================
const heroBadge = document.querySelector('.hero-badge');
if (heroBadge) {
    const originalText = heroBadge.textContent;
    heroBadge.textContent = '';
    let charIndex = 0;

    function typeText() {
        if (charIndex < originalText.length) {
            heroBadge.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50);
        }
    }

    // Start typing animation after page load
    setTimeout(typeText, 500);
}

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
// Button Ripple Effect
// ====================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ====================
// Parallax Effect for Hero Visual
// ====================
const heroVisual = document.querySelector('.hero-visual');

window.addEventListener('scroll', () => {
    if (heroVisual && window.pageYOffset < window.innerHeight) {
        const scrolled = window.pageYOffset;
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ====================
// Console Easter Egg
// ====================
console.log('%c👋 Hey there!', 'font-size: 20px; color: #7FCD91; font-weight: bold;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #5A6F6B;');
console.log('%cFeel free to reach out: anggaprawira5.0@outlook.com', 'font-size: 12px; color: #7D9490;');
