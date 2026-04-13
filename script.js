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

    // Header esconde ao rolar
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
            if(!header.classList.contains('hidden') && !textomenu.classList.contains('open')) {
                menuOverlay.classList.add('open'); // Garante que o overlay esteja fechado
                menuMobile.classList.add('open'); // Garante que o menu esteja fechado
                textomenu.classList.add('open'); // Abre o menu
            }
        }
        lastScroll = currentScroll;
    }); 

});