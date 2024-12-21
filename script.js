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

let currentIndex = 0;  // Index de l'image actuellement affichée
        const carouselItems = document.querySelector('.carousel-items');  // Conteneur des éléments du carrousel
        const totalItems = document.querySelectorAll('.carousel-item').length;  // Nombre total d'éléments du carrousel

        // Fonction pour déplacer le carrousel
        function moveSlide(direction) {
            // Mettre à jour l'index de l'image
            currentIndex += direction;

            // Si l'index est inférieur à 0, on revient à la dernière image
            if (currentIndex < 0) {
                currentIndex = totalItems - 1;
            }

            // Si l'index dépasse le nombre d'éléments, on revient à la première image
            if (currentIndex >= totalItems) {
                currentIndex = 0;
            }

            // Appliquer un décalage au carrousel en fonction de l'index
            carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Fonction pour faire défiler automatiquement les éléments du carrousel toutes les 5 secondes
        setInterval(() => {
            moveSlide(1);
        }, 5000);  // 5000ms = 5 secondes

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

   // Animation de compteur
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

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
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    observer.observe(counter);
  });
});

