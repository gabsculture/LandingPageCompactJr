document.addEventListener('DOMContentLoaded', () => {

    // Menu Mobile
    const menuMobile = document.getElementById('menuMobile');
    const textomenu = document.getElementById('textomenu');

    if (menuMobile && textomenu) {
        menuMobile.addEventListener('click', () => {
            menuMobile.classList.toggle('open');
            textomenu.classList.toggle('open');
        });

        textomenu.querySelectorAll('.menu-item').forEach(link => {
            link.addEventListener('click', () => {
                menuMobile.classList.remove('open');
                textomenu.classList.remove('open');
            });
        });
    }

    // Menu esconde ao rolar para baixo
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