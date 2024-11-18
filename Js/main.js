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


