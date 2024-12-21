
// Récupère le header
const header = document.getElementById("header");
// Écoute l'événement de défilement
window.addEventListener("scroll", function() {
    // Si l'utilisateur a défilé plus de 50px
    if (window.scrollY > 50) {
        header.classList.add("scrolled"); // Ajoute la classe 'scrolled'
    } else {
        header.classList.remove("scrolled"); // Retire la classe 'scrolled'
    }
});

const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  carousel.scrollTo({
    left: currentIndex * carousel.offsetWidth,
    behavior: 'smooth'
  });
}

setInterval(nextSlide, 5000); // Change d'image toutes les 5 secondes
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    const items = carousel.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    function showNextTestimonial() {
        items[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].style.display = 'block';
    }

    // Cacher tous les témoignages sauf le premier
    items.forEach((item, index) => {
        if (index !== 0) item.style.display = 'none';
    });

    // Changer de témoignage toutes les 5 secondes
    setInterval(showNextTestimonial, 5000);
});
