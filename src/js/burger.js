'use strict';
const burgerBtn = document.querySelector('.mobile-navigation-btn');
const modalMenu = document.querySelector('.mobile-site-navigation');
const modalAnchor = [...document.querySelectorAll('.mobile-site-navigation .site-navigation__link')];

let openModal = (e) => {
    let target = e.target;
    
    if (modalMenu.classList.contains('mobile-site-navigation_active')) {
        burgerBtn.style.backgroundImage = "url('./images/icon-burger.png')";
        modalMenu.classList.toggle('mobile-site-navigation_active');
    } else {
        modalMenu.classList.toggle('mobile-site-navigation_active');
        burgerBtn.style.backgroundImage = "url('./images/icon-burger-closed.png')";
    }
}

let closeModal = () => {
    if (modalMenu.classList.contains('mobile-site-navigation_active')) {
        burgerBtn.style.backgroundImage = "url('./images/icon-burger.png')";
        modalMenu.classList.toggle('mobile-site-navigation_active');
    } else {
        modalMenu.classList.toggle('mobile-site-navigation_active');
        burgerBtn.style.backgroundImage = "url('./images/icon-burger-closed.png')";
    }
}

modalAnchor.forEach(e => {
    e.addEventListener('click', closeModal);
})
burgerBtn.addEventListener('click', openModal);