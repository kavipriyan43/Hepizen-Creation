// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== Fade-in Animation on Scroll =====
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); // Run on load

// ===== Navbar Glow on Scroll =====
const navbar = document.querySelector("header.navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ===== Contact Form Success Message =====
const contactForm = document.querySelector("form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent actual submit for now

        // Simple success alert
        alert("✅ Message Sent! We’ll get back to you soon.");

        // Reset form
        contactForm.reset();
    });
}
