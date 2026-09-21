// Smooth scrolling for navigation links
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

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and other elements
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

document.querySelectorAll('.contact-method').forEach(method => {
    method.style.opacity = '0';
    method.style.transform = 'translateY(20px)';
    method.style.transition = 'all 0.6s ease';
    observer.observe(method);
});

// Mobile menu toggle (if needed for smaller screens)
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-logo');

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add styling for active nav links
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-color) !important;
        border-bottom: 2px solid var(--primary-color);
        padding-bottom: 2px;
    }
`;
document.head.appendChild(style);

// Prevent images from causing layout shift while loading
window.addEventListener('load', () => {
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '1';
    });
});

console.log('Axle Portfolio Website Loaded');
