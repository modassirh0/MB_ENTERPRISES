document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('atm-enquiry');
    
    // Simple Form Submission Handling
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! An MB Enterprises representative will contact you shortly.');
        form.reset();
    });

    // Mobile Menu Toggle (Basic Logic)
    const mobileMenu = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Add CSS for .nav-links.active to show the menu on mobile
    });

    // Scroll Animation Observer (Optional Polish)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-box, .earnings-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});