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
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
    return currentIndex;
}
// Carrousel d'images
let imageCarouselIndex = 0;
const imageCarouselItems = document.querySelector('.carousel-items'); 
const imageTotalItems = document.querySelectorAll('.carousel-item').length;

function moveImageSlide() {
    imageCarouselIndex = moveSlide(imageCarouselItems, imageCarouselIndex, imageTotalItems, 1);
}

setInterval(moveImageSlide, 5000);

// Animation de compteur
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM chargé");
    const counters = document.querySelectorAll('.counter');
    const testimonials = document.querySelectorAll('.testimonial-item');
    console.log("Nombre de compteurs trouvés:", counters.length);
    console.log("Nombre de témoignages trouvés:", testimonials.length);

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const stepTime = 50;
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

    const animateTestimonial = (testimonial) => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(20px)';
        setTimeout(() => {
            testimonial.style.transition = 'opacity 0.5s, transform 0.5s';
            testimonial.style.opacity = '1';
            testimonial.style.transform = 'translateY(0)';
        }, 100);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('counter')) {
                    console.log("Démarrage du compteur:", entry.target);
                    animateCounter(entry.target);
                } else if (entry.target.classList.contains('testimonial-item')) {
                    console.log("Animation du témoignage:", entry.target);
                    animateTestimonial(entry.target);
                }
                observer.unobserve(entry.target);
            } else if (entry.target.classList.contains('counter')) {
                entry.target.textContent = '0';
            }
        });
    }, { threshold: 0.1 });

    counters.forEach(counter => {
        observer.observe(counter);
        console.log("Observation du compteur:", counter);
    });

    testimonials.forEach(testimonial => {
        observer.observe(testimonial);
        console.log("Observation du témoignage:", testimonial);
    });
});
