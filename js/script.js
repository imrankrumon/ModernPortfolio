'use strict'

const menuBtn = document.querySelector('.header__menu--btn');
const menuNav = document.querySelector('.header__menu');
const menuBranding = document.querySelector('.header__menu--branding');
const menuItemsContainer = document.querySelector('.header__menu--items');
const menuItems = document.querySelectorAll('.header__menu--item');

// Set initial state
let showMenu = false;

const toggleMenu = function () {
    if (!showMenu) {
        menuBtn.classList.add('open');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        menuItemsContainer.classList.add('show');
        menuItems.forEach((item, i) => {
            item.classList.add('show');
            item.style.transitionDelay = `${(i * 0.1) + 0.15}s`
        });

        // Change show state
        showMenu = true;
    } else {
        menuBtn.classList.remove('open');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        menuItemsContainer.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));

        // Change show state
        showMenu = false;
    }
}

menuBtn.addEventListener('click', toggleMenu);