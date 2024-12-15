document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");
    const logo = document.querySelector(".logo a");
    const links = document.querySelectorAll(".nav-links a");
    const hamburger = document.createElement("button"); // Création d'un bouton hamburger

    // Création du bouton hamburger
    hamburger.innerHTML = "<span></span><span></span><span></span>"; // Structure des lignes du menu hamburger
    hamburger.classList.add("hamburger-menu");
    hamburger.setAttribute("aria-label", "Menu");
    document.querySelector("header").appendChild(hamburger);

    // Fonction pour basculer le menu
    const toggleMenu = () => {
        navLinks.classList.toggle("active");
        const isExpanded = navLinks.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isExpanded.toString());
        
        if (isExpanded) {
            navLinks.style.maxHeight = navLinks.scrollHeight + "px";
        } else {
            navLinks.style.maxHeight = "0";
        }
    };

    // Gestion du clic sur le bouton hamburger
    hamburger.addEventListener("click", toggleMenu);

    // Fermeture du menu lors du clic sur un lien (petits écrans uniquement)
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            if (window.innerWidth < 768) {
                toggleMenu();
            }
        });
    });

    // Gestion du redimensionnement de la fenêtre
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            navLinks.style.maxHeight = "";
            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });

    // Ajout de la fonctionnalité de défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
