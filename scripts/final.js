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


//  To get the current y
document.getElementById('currentyear').textContent = new Date().getFullYear();

//To set last modified
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;