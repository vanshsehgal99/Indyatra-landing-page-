// Mobile Navigation Menu
const menuIcon = document.querySelector('nav i');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');
let isMenuOpen = false;

// Toggle menu icon
function toggleMenuIcon() {
    menuIcon.classList.toggle('ri-menu-line');
    menuIcon.classList.toggle('ri-close-line');
}

// Toggle mobile menu
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle('active');
    toggleMenuIcon();
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (isMenuOpen && !navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
        isMenuOpen = false;
        navMenu.classList.remove('active');
        toggleMenuIcon();
        document.body.style.overflow = '';
    }
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        navMenu.classList.remove('active');
        toggleMenuIcon();
        document.body.style.overflow = '';
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        isMenuOpen = false;
        navMenu.classList.remove('active');
        toggleMenuIcon();
        document.body.style.overflow = '';
    }
});

// Smooth scroll for navigation links
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

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formGroups = document.querySelectorAll('.form-group');

// Add placeholder attributes to inputs for floating label effect
formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');
    input.setAttribute('placeholder', ' ');
});

// Form submission handling
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Show success message
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.backgroundColor = '#28a745';
    
    // Reset form
    this.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
    }, 3000);
});

// Add focus effects to form inputs
formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    
    input.addEventListener('focus', () => {
        group.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            group.classList.remove('focused');
        }
    });
});

