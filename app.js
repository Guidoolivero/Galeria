let miImagen = document.getElementById('mainImage')
let btn = document.getElementById('nextBtn')

var imagenes = [
    '/img/aaron-huber-8qYE6LGHW-c-unsplash.jpg',
    '/img/alex-suprun-A53o1drQS2k-unsplash.jpg',
    '/img/chris-nguyen-aTX_bRaOZnA-unsplash.jpg',
    '/img/dhiva-krishna-YApS6TjKJ9c-unsplash.jpg',
    '/img/dima-panyukov-DwxlhTvC16Q-unsplash.jpg',
    '/img/evgeny-tchebotarev-aiwuLjLPFnU-unsplash.jpg',
    '/img/haidong-liang-1keMi3aD1gg-unsplash.jpg',
    '/img/hakon-sataoen-qyfco1nfMtg-unsplash.jpg',
    '/img/igor-lypnytskyi-m61MVp0w1p4-unsplash.jpg',
    '/img/josh-berquist-0kxOW0I-HLM-unsplash.jpg',
    '/img/joshua-koblin-eqW1MPinEV4-unsplash.jpg',
    '/img/kenny-eliason-FcyipqujfGg-unsplash.jpg',
    '/img/olav-tvedt-6lSBynPRaAQ-unsplash.jpg',
    '/img/stefan-rodriguez-2AovfzYV3rc-unsplash.jpg',
    '/img/tyler-clemmensen-4gSavS9pe1s-unsplash.jpg'
];

var indice = 1;

function cambiarImagen() {
    miImagen.setAttribute('src', imagenes[indice])
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    }
}

var currentImageIndex = 0; // Variable para rastrear el índice de la imagen actual

function openModal(img, index) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");

    modal.style.display = "block";
    modalImg.src = img.src;
    currentImageIndex = index;

    // Mostrar u ocultar las flechas según la posición de la imagen actual
    if (currentImageIndex === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }

    if (currentImageIndex === gallery.length - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function showPrevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = gallery.length - 1;
    }

    var modalImg = document.getElementById("modalImage");
    modalImg.src = gallery[currentImageIndex].src;
}

function showNextImage() {
    if (currentImageIndex < gallery.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }

    var modalImg = document.getElementById("modalImage");
    modalImg.src = gallery[currentImageIndex].src;
}

