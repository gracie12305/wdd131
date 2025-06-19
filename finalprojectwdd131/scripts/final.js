// Example: Add popup alerts for FAQs
document.querySelectorAll('.faq-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        alert(`More information coming soon for: "${this.textContent}"`);
    });
});


// Handles "Click here" info links in links-grid
document.querySelectorAll('.info-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const info = this.getAttribute('data-info');
        alert(info);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-left, .animate-up');

    function animateOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.classList.add('animate-visible');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // run on load
});

document.addEventListener("DOMContentLoaded", () => {
    const showFormBtn = document.getElementById("show-form-btn");
    const formContainer = document.getElementById("volunteer-form");

    showFormBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent link from jumping
        formContainer.style.display = "block";
        formContainer.scrollIntoView({ behavior: "smooth" });
    });
});
  

//  To get the current y
document.getElementById('currentyear').textContent = new Date().getFullYear();

//To set last modified
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;