document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");
    const logo = document.querySelector(".logo");
    const links = document.querySelectorAll(".nav-links a");

    // Toggle menu for responsive navigation
    logo.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Highlight the active link
    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active")); // Remove active class from all links
            link.classList.add("active"); // Add active class to the clicked link
        });
    });
});
