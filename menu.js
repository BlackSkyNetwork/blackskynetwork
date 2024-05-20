document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuList = document.querySelector('.my-menu-list');

    mobileMenu.addEventListener('click', function(event) {
        event.stopPropagation();
        menuList.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !menuList.contains(event.target)) {
            menuList.classList.remove('active');
        }
    });
});
