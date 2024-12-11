document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");

    // Responsive menu toggle
    document.querySelector(".logo").addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
