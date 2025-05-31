//  To get the current y
document.getElementById('currentyear').textContent = new Date().getFullYear();

//To set last modified
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

//Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("open");

            // Toggle symbol from ☰ to ✖
            if (navMenu.classList.contains("open")) {
                menuToggle.textContent = "✖";
            } else {
                menuToggle.textContent = "☰";
            }
        });
    }
});

