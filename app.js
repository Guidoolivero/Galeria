let miImagen = document.getElementById('mainImage')
let btn = document.getElementById('nextBtn')
let btn2 = document.getElementById('prevBtn')

// Obtener elementos del DOM
var mainImage = document.getElementById('mainImage');
var modal = document.getElementById('myModal');
var modalImage = document.getElementById('modalImage');
var closeBtn = document.getElementsByClassName('close')[0];




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

function nextBtn() {
    miImagen.setAttribute('src', imagenes[indice])
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    }
}


function prevBtn() {

    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1;
    }
    miImagen.setAttribute('src', imagenes[indice]);
}

function openModal(imageUrl) {
    var imageUrl = '/img/chris-nguyen-aTX_bRaOZnA-unsplash.jpg'

    miImagen.setAttribute('src', imageUrl);
    modal.style.display = 'block'; // Mostrar el modal
    overlay.style.backgroundColor = 'transparent';
}


// Abrir modal con la imagen en grande
mainImage.addEventListener('click', function () {
    modal.style.display = 'block';
    modalImage.src = mainImage.src;
});

// Cerrar modal al hacer click en el botón de cerrar
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});


miImagen.addEventListener('click', openModal)
btn.addEventListener('click', nextBtn)
btn2.addEventListener('click', prevBtn)
