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

if (imageCarouselItems) {
    // Fonction pour changer d'image automatiquement
    function moveImageSlide() {
        imageCarouselIndex = moveSlide(imageCarouselItems, imageCarouselIndex, imageTotalItems, 1);
    }

    // Déclenche l'autoplay du carrousel toutes les 5 secondes
    let autoplayInterval = setInterval(moveImageSlide, 5000);

    // Fonction pour stopper l'autoplay si l'utilisateur clique sur les flèches
    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(autoplayInterval);
        moveImageSlide();
        autoplayInterval = setInterval(moveImageSlide, 5000); // Relance l'autoplay après un clic
    });

    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(autoplayInterval);
        moveImageSlide();
        autoplayInterval = setInterval(moveImageSlide, 5000); // Relance l'autoplay après un clic
    });
}

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
                counter.animationId = requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
           // Annuler l'animation précédente si elle existe
        if (counter.animationId) {
            cancelAnimationFrame(counter.animationId);
        }
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

       const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Démarrage du compteur:", entry.target);
                animateCounter(entry.target);
            } else {
                entry.target.textContent = '0'; // Remise à zéro si l'élément sort de la vue
                if (entry.target.animationId) {
                    cancelAnimationFrame(entry.target.animationId);
                }
            }
        });
    }, { threshold: 0.5 });

    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Animation du témoignage:", entry.target);
                animateTestimonial(entry.target);
                testimonialObserver.unobserve(entry.target); // Arrête l'observation après le premier déclenchement
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
        console.log("Observation du compteur:", counter);
    });

    testimonials.forEach(testimonial => {
        testimonialObserver.observe(testimonial);
        console.log("Observation du témoignage:", testimonial);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    
    function startZoomEffect() {
        heroImage.classList.add('zoom-effect');
    }
    
    // Démarrer l'effet de zoom après un court délai
    setTimeout(startZoomEffect, 100);
});



document.addEventListener('DOMContentLoaded', () => {
    const serviceSections = document.querySelectorAll('.service-details');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Ajoute la classe pour l'animation
                observer.unobserve(entry.target); // Arrête l'observation après le premier déclenchement
            }
        });
    }, { threshold: 0.1 });

    serviceSections.forEach(section => observer.observe(section));
});
window.onload = function() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "OMH Peinture",
      "url": "https://www.omh-peinture.fr",
      "logo": "https://www.omh-peinture.fr/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33 07 49 18 59 61",
        "contactType": "customer service",
        "areaServed": "FR",
        "availableLanguage": "French"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Avenue de la Concorde",
        "addressLocality": "Caen",
        "postalCode": "14000",
        "addressCountry": "FR"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);
}


