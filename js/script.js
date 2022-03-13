const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const openMenu = () => {
    menu.classList.toggle('header-nav__list--active');
}


menuToggle.addEventListener('click', openMenu);