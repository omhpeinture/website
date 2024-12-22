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
// **Fonction commune pour déplacer les éléments du carrousel**
function moveSlide(carouselItems, currentIndex, totalItems, direction) {
  // Mettre à jour l'index de l'élément
  currentIndex += direction;

  // Gérer les débordements d'index
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  // Appliquer un décalage au carrousel en fonction de l'index
  carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Carrousel d'images
let imageCarouselIndex = 0;
const imageCarouselItems = document.querySelector('.carousel-items'); 
const imageTotalItems = document.querySelectorAll('.carousel-item').length;

// Fonction pour déplacer le carrousel d'images
function moveImageSlide() {
  moveSlide(imageCarouselItems, imageCarouselIndex, imageTotalItems, 1);
}

// Défilement automatique du carrousel d'images toutes les 5 secondes
setInterval(moveImageSlide, 5000);

// Carrousel de témoignages
let testimonialCarouselIndex = 0;
const testimonialCarousel = document.querySelector('.testimonial-carousel');
const testimonialItems = testimonialCarousel.querySelectorAll('.testimonial-item');

// Fonction pour afficher le témoignage suivant
function showNextTestimonial() {
  testimonialItems[testimonialCarouselIndex].style.display = 'none';
  testimonialCarouselIndex = (testimonialCarouselIndex + 1) % testimonialItems.length;
  testimonialItems[testimonialCarouselIndex].style.display = 'block';
}

// Cacher tous les témoignages sauf le premier
testimonialItems.forEach((item, index) => {
  if (index !== 0) item.style.display = 'none';
});

// Changer de témoignage toutes les 5 secondes
setInterval(showNextTestimonial, 5000);

// Animation de compteur
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM chargé");
  const counters = document.querySelectorAll('.counter');
  console.log("Nombre de compteurs trouvés:", counters.length);
  const speed = 1000;

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // Durée de l'animation en millisecondes
    const stepTime = 50; // Temps entre chaque étape de l'animation
    const steps = duration / stepTime;
    let current = 0;
    
    const updateCounter = () => {
      current += target / steps;
      if (current < target) {
        counter.textContent = Math.round(current);
        setTimeout(updateCounter, stepTime);
      } else {
        counter.textContent = target;
      }
    };
    
    counter.textContent = '0';
    updateCounter();
  };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("Démarrage du compteur:", entry.target);
        animateCounter(entry.target);
      } else {
        // Réinitialiser le compteur quand il n'est plus visible
        entry.target.textContent = '0';
      }
    });
  }, { threshold: 0.1 });


  counters.forEach(counter => {
    observer.observe(counter);
    console.log("Observation du compteur:", counter);
  });
});
