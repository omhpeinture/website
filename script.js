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
  const speed = 500;

  const startCounter = (counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute('data-target'));
      const count = parseInt(counter.innerText);
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log("Élément observé:", entry.target);
      console.log("Est intersecté:", entry.isIntersecting);
      if (entry.isIntersecting) {
        console.log("Démarrage du compteur");
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01 });

  counters.forEach(counter => {
    observer.observe(counter);
    console.log("Observation du compteur:", counter);
  });
});
