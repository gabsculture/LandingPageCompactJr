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

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll && currentScroll > 80) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScroll = currentScroll;
    });

});