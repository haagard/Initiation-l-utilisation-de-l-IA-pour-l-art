// Sélection des éléments
const toggleButton = document.querySelector('.toggle-button');
const contactBubble = document.querySelector('.contact-bubble');

// Fonction d’ouverture d'onglet
function opentab(tabName) {
    const contents = document.querySelectorAll('.tab-contents');
    const links = document.querySelectorAll('.tab-links');

    contents.forEach(content => content.classList.remove('active-tab'));
    links.forEach(link => link.classList.remove('active-link'));

    document.getElementById(tabName).classList.add('active-tab');
    document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`).classList.add('active-link');
}

// Initialisation lors du chargement
document.addEventListener("DOMContentLoaded", () => {
    // Aucune autre logique pour l'icône ici
});


// Affiche ou cache la flèche en fonction du défilement
window.addEventListener('scroll', function() {
    const scrollArrow = document.getElementById('scroll-arrow');
    const halfWindowHeight = window.innerHeight / 2; // Calculer la moitié de la hauteur de la fenêtre

    if (window.scrollY > halfWindowHeight) { // Si l'utilisateur a défilé au-delà de la moitié de la fenêtre
        scrollArrow.classList.remove('hidden');
        scrollArrow.style.opacity = 1; // Montre la flèche
    } else {
        scrollArrow.classList.add('hidden');
        scrollArrow.style.opacity = 0; // Cache la flèche
    }
});

// Fonction pour faire défiler la page vers le haut
document.getElementById('scroll-arrow').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Fait défiler vers le haut en douceur
});


// Modal script
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Ouvre la modal avec l'image cliquée
    document.querySelectorAll(".clickable-image").forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Ferme la modal en cliquant sur le X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Ferme la modal en cliquant en dehors de l'image
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

