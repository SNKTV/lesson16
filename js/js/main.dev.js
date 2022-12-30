"use strict";

var mobileMenu = document.querySelectorAll('.mob__menu');
mobileMenu.forEach(function (mob__menu) {
  mob__menu.addEventListener('click', function (e) {
    mob__menu.classList.toggle("open");
  });
});