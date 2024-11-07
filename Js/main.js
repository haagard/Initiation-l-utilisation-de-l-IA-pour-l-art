// Sélection des éléments
const toggleButton = document.querySelector('.toggle-button'); // Utiliser si nécessaire
const contactBubble = document.querySelector('.contact-bubble');
const scrollArrow = document.getElementById('scroll-arrow');

// Fonction d’ouverture d'onglet
function opentab(tabName) {
    const contents = document.querySelectorAll('.tab-contents');
    const links = document.querySelectorAll('.tab-links');

    contents.forEach(content => content.classList.remove('active-tab'));
    links.forEach(link => link.classList.remove('active-link'));

    document.getElementById(tabName).classList.add('active-tab');
    document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`).classList.add('active-link');
}

// Affiche ou cache la flèche en fonction du défilement
function toggleScrollArrow() {
    const halfWindowHeight = window.innerHeight / 2;

    if (window.scrollY > halfWindowHeight) {
        scrollArrow.classList.remove('hidden');
        scrollArrow.style.opacity = 1;
    } else {
        scrollArrow.classList.add('hidden');
        scrollArrow.style.opacity = 0;
    }
}

// Fonction pour faire défiler la page vers le haut
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal script
function setupModal() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".clickable-image").forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// CSS pour gérer l'affichage du bouton et la description
function addCSS() {
    const style = document.createElement('style');
    style.innerHTML = `
        .show-description-btn {
            display: inline-block;
            padding: 10px 15px;
            background-color:#5a3c29;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1em;
            margin-top: 10px;
        }

        .show-description-btn:hover {
            background-color: #3B2C20;
        }

        /* Cacher la description par défaut */
        .layer-text {
            display: none;
        }

        /* Afficher la description lorsque .show-description est active */
        .image.show-description .layer-text {
            display: block;
        }
    `;
    document.head.appendChild(style);
}

// Écouteurs d'événements
document.addEventListener("DOMContentLoaded", () => {
    addCSS();  // Ajoute les styles CSS dynamiquement

    toggleButton && toggleButton.addEventListener('click', /* logique du toggleButton */);
    window.addEventListener('scroll', toggleScrollArrow);
    scrollArrow.addEventListener('click', scrollToTop);
    setupModal();

    // Gérer le bouton "Prompt de l'image" pour chaque image
    document.querySelectorAll('.show-description-btn').forEach((button, index) => {
        button.textContent = `Prompt de l'Image ${index + 1}`;
        
        button.addEventListener('click', function() {
            const imageContainer = this.closest('.image');
            // Toggle pour afficher/masquer la description
            imageContainer.classList.toggle('show-description');
        });
    });
});
