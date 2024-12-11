document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");
    const logo = document.querySelector(".logo a");
    const links = document.querySelectorAll(".nav-links a");

    // Toggle menu for responsive navigation
    logo.addEventListener("click", (e) => {
        if (window.innerWidth < 768) {
            e.preventDefault(); // Empêche la redirection pour petits écrans
            navLinks.classList.toggle("active");

            // Gestion de l'animation pour le menu
            if (navLinks.classList.contains("active")) {
                navLinks.style.maxHeight = navLinks.scrollHeight + "px";
            } else {
                navLinks.style.maxHeight = "0";
            }
        }
    });

    // Close menu on link click (small screens only)
    links.forEach(link => {
        link.addEventListener("click", () => {
            // Update active class
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Close menu after click
            if (window.innerWidth < 768) {
                navLinks.classList.remove("active");
                navLinks.style.maxHeight = "0";
            }
        });
    });

    // Add accessibility feature for aria-expanded
    const updateAriaExpanded = () => {
        const isExpanded = navLinks.classList.contains("active");
        logo.setAttribute("aria-expanded", isExpanded.toString());
    };

    navLinks.addEventListener("transitionend", updateAriaExpanded);
    logo.addEventListener("click", updateAriaExpanded);
});
