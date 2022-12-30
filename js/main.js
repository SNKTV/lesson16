const mobileMenu = document.querySelectorAll('.mob__menu');
mobileMenu.forEach(mob__menu => {
    mob__menu.addEventListener('click', (e) => {
        mob__menu.classList.toggle("open");
    });
});