const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mainmenu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  menu.classList.toggle('open');
});

// Fecha ao clicar em um link
menu.querySelectorAll('.menu-item').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('open');
    menu.classList.remove('open');
  });
});