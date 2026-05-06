const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('change');
    nav.classList.toggle('active');
});