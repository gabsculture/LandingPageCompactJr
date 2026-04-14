document.addEventListener('DOMContentLoaded', () => {

    const menuMobile = document.getElementById('menuMobile');
    const textomenu = document.getElementById('textomenu');
    const overlay = document.getElementById('menuOverlay');

    function fecharMenu() {
        menuMobile.classList.remove('open');
        textomenu.classList.remove('open');
        overlay.classList.remove('open');
    }

    if (menuMobile && textomenu) {
        menuMobile.addEventListener('click', () => {
            menuMobile.classList.toggle('open');
            textomenu.classList.toggle('open');
            overlay.classList.toggle('open');
        });

        textomenu.querySelectorAll('.menu-item').forEach(link => {
            link.addEventListener('click', fecharMenu);
        });

        overlay.addEventListener('click', fecharMenu);
    }
    const divisor = document.getElementsByClassName('divisor');
    
    // Função para verificar largura da janela e aplicar/remover 'hidden' na classe 'divisor'
    function checkWidth() {
        //const divisor = document.querySelectorAll('divisor');
        if (window.innerWidth >= 900) {
            divisor.classList.add('hidden');
        } else {
            divisor.classList.remove('hidden');
        }
    }
    // Verificar largura ao carregar a página
    checkWidth();
    // Verificar largura ao redimensionar a janela
    window.addEventListener('resize', checkWidth);
    
    let lastScroll = 0;
    const header = document.querySelector('header');
    const menuOverlay = document.getElementById('menuOverlay');

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll != lastScroll && currentScroll > 80) {
            header.classList.add('hidden');
            if(header.classList.contains('hidden')) {
                menuOverlay.classList.remove('open'); // Fecha o menu se estiver aberto
                menuMobile.classList.remove('open');
                textomenu.classList.remove('open');
            }
        } else {
            header.classList.remove('hidden');

        }
        lastScroll = currentScroll;
    }); 

});

//Carrossel

const leftBtn = document.querySelector('.btn-carrossel.left');
const rightBtn = document.querySelector('.btn-carrossel.right');

const items = document.querySelectorAll('.item');

let current = 1;

function updateClasses() {
    items.forEach(item => item.classList.remove('left', 'active', 'right'));

    let left = (current - 1 + items.length) % items.length;
    let right = (current + 1) % items.length;

    items[left].classList.add('left');
    items[current].classList.add('active');
    items[right].classList.add('right');
}

function nextSlide() {
    current = (current + 1) % items.length;
    updateClasses();
}

function prevSlide() {
    current = (current - 1 + items.length) % items.length;
    updateClasses();
}

let interval;

function startAuto() {
    interval = setInterval(nextSlide, 3000);
}

function resetAuto() {
    clearInterval(interval);
    startAuto();
}

rightBtn.addEventListener('click', () => {
    nextSlide();
    resetAuto();
});

leftBtn.addEventListener('click', () => {
    prevSlide();
    resetAuto();
});

updateClasses();
startAuto();


let startX = 0;
let endX = 0;

const container = document.querySelector('.container-carrossel');

container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    let diff = startX - endX;

    if (diff > 50) {
        nextSlide();
        resetAuto();
    } else if (diff < -50) {
        prevSlide();
        resetAuto();
    }
}