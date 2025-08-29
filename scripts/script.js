// Mobile Menu Toggle
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwxLbMvQsb2Ew31tYzzZSlNxHn0EEQ7Ne5bL-_tNfAP_H-GASmgFfsInzIkTCkJTI5S/exec';

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get the submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = `
            <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
            </svg>
            Sending...
        `;
        submitBtn.disabled = true;

        // Create hidden iframe for submission (if it doesn't exist)
        let iframe = document.getElementById('hidden_iframe');
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.id = 'hidden_iframe';
            iframe.name = 'hidden_iframe';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
        }

        // Create temporary form for submission
        const tempForm = document.createElement('form');
        tempForm.action = GOOGLE_SCRIPT_URL;
        tempForm.method = 'POST';
        tempForm.target = 'hidden_iframe';

        // Add all form fields as hidden inputs
        const formFields = [
            { id: 'firstName', name: 'firstName' },
            { id: 'lastName', name: 'lastName' },
            { id: 'email', name: 'email' },
            { id: 'company', name: 'company' },
            { id: 'phone', name: 'phone' },
            { id: 'message', name: 'message' }
        ];

        formFields.forEach(field => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = field.name;
            input.value = document.getElementById(field.id).value || '';
            tempForm.appendChild(input);
        });

        // Add form to page and submit
        document.body.appendChild(tempForm);
        tempForm.submit();

        // Handle success (assume success after submission)
        setTimeout(() => {
            showMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.', 'success');
            contactForm.reset();

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Clean up temporary form
            document.body.removeChild(tempForm);
        }, 2000);
    });
});

// Function to show success/error messages
function showMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <svg class="message-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${type === 'success'
                    ? '<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>'
                    : '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
                }
            </svg>
            <span>${message}</span>
        </div>
    `;

    // Insert message above the form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(messageDiv, form);

    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 8000);
}

// CSS styles for the messages
const messageStyles = `
.form-message {
    margin-bottom: 24px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid;
}

.form-message-success {
    background-color: #f0f9ff;
    border-color: #0ea5e9;
    color: #0c4a6e;
}

.form-message-error {
    background-color: #fef2f2;
    border-color: #ef4444;
    color: #991b1b;
}

.message-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.message-icon {
    flex-shrink: 0;
}

.animate-spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`;

// Inject the CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = messageStyles;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');

        // Animate hamburger menu
        const hamburgers = mobileMenuToggle.querySelectorAll('.hamburger');
        if (mobileMenu.classList.contains('active')) {
            hamburgers[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburgers[1].style.opacity = '0';
            hamburgers[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            hamburgers[0].style.transform = 'none';
            hamburgers[1].style.opacity = '1';
            hamburgers[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const hamburgers = mobileMenuToggle.querySelectorAll('.hamburger');
            hamburgers[0].style.transform = 'none';
            hamburgers[1].style.opacity = '1';
            hamburgers[2].style.transform = 'none';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            const hamburgers = mobileMenuToggle.querySelectorAll('.hamburger');
            hamburgers[0].style.transform = 'none';
            hamburgers[1].style.opacity = '1';
            hamburgers[2].style.transform = 'none';
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Background on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Contact Form Handling
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();

//         // Get form data
//         const formData = new FormData(contactForm);
//         const data = {
//             firstName: formData.get('firstName'),
//             lastName: formData.get('lastName'),
//             email: formData.get('email'),
//             company: formData.get('company'),
//             phone: formData.get('phone'),
//             message: formData.get('message')
//         };

//         // Basic validation
//         if (!data.firstName || !data.lastName || !data.email || !data.company || !data.message) {
//             alert('Please fill in all required fields.');
//             return;
//         }

//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(data.email)) {
//             alert('Please enter a valid email address.');
//             return;
//         }

//         // Simulate form submission
//         const submitButton = contactForm.querySelector('button[type="submit"]');
//         const originalText = submitButton.innerHTML;

//         submitButton.innerHTML = 'Sending...';
//         submitButton.disabled = true;

//         // Simulate API call
//         setTimeout(() => {
//             contactForm.reset();
//             submitButton.innerHTML = originalText;
//             submitButton.disabled = false;
//             alert('Thank you for your interest! We will contact you within 24 hours.');
//         }, 2000);

//         // In a real application, you would send this data to your server
//         console.log('Form submitted with data:', data);
//     });
// }

// Newsletter Form Handling
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterButton = newsletterEmail?.nextElementSibling;

if (newsletterButton) {
    newsletterButton.addEventListener('click', function(e) {
        e.preventDefault();

        const email = newsletterEmail.value.trim();

        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const originalText = newsletterButton.innerHTML;
        newsletterButton.innerHTML = 'Subscribing...';
        newsletterButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('Thank you for subscribing to our newsletter!');
            newsletterEmail.value = '';
            newsletterButton.innerHTML = originalText;
            newsletterButton.disabled = false;
        }, 1500);

        console.log('Newsletter subscription:', email);
    });
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .about-text, .contact-form-container');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading state for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });

        // Set initial state
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';

        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Button hover effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.btn-icon');
            if (icon) {
                icon.style.transform = 'translateX(2px)';
            }
        });

        button.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.btn-icon');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
    });
});

// Service card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-img');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
    // This would integrate with Google Analytics or other analytics services
    console.log('Analytics Event:', { category, action, label });
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary')) {
        trackEvent('Button', 'Click', e.target.textContent.trim());
    }
});

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.id === 'contactForm') {
        trackEvent('Form', 'Submit', 'Contact Form');
    }
});

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// // Inject the CSS
// const styleSheet = document.createElement('style');
// styleSheet.textContent = messageStyles;
// document.head.appendChild(styleSheet);