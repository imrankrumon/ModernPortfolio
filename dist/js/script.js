'use strict'

const menuBtn = document.querySelector('.header__menu--btn');
const menuNav = document.querySelector('.header__menu--nav');
const menuBranding = document.querySelector('.header__menu--branding');
const menuItemsContainer = document.querySelector('.header__menu--items');
const menuItems = document.querySelectorAll('.header__menu--item');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
})