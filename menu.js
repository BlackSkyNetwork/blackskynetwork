document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuList = document.querySelector('.my-menu-list');

    mobileMenu.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });
});