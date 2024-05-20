const mobileMenu = document.getElementById('mobile-menu');
const menuList = document.querySelector('.my-menu-list');

mobileMenu.addEventListener('click', () => {
    menuList.classList.toggle('active');
});