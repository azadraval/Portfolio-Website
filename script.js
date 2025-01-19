// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing animation for the hero section
const typedText = document.querySelector('#hero .hero-content h1');
const textArray = ["Azad Raval", "Web Developer", "Software Engineer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    if (textIndex < textArray.length) {
        const currentText = textArray[textIndex];
        const displayedText = isDeleting ? currentText.substring(0, charIndex--) : currentText.substring(0, charIndex++);
        typedText.textContent = displayedText;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, 1500); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, 500); // Pause before typing next
        } else {
            setTimeout(typeText, isDeleting ? 50 : 100);
        }
    }
}
typeText();

// Contact form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const messageData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };
    console.log('Message received:', messageData); // For demonstration purposes
    alert('Thank you for reaching out! Your message has been sent successfully.');
    contactForm.reset();
});

// Highlight active section on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
