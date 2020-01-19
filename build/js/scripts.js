'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var burgerBtn = document.querySelector('.mobile-navigation-btn');
var modalMenu = document.querySelector('.mobile-site-navigation');

var modalAnchor = _toConsumableArray(document.querySelectorAll('.mobile-site-navigation .site-navigation__link'));

var openModal = function openModal(e) {
  var target = e.target;

  if (modalMenu.classList.contains('mobile-site-navigation_active')) {
    burgerBtn.style.backgroundImage = "url('./images/icon-burger.png')";
    modalMenu.classList.toggle('mobile-site-navigation_active');
  } else {
    modalMenu.classList.toggle('mobile-site-navigation_active');
    burgerBtn.style.backgroundImage = "url('./images/icon-burger-closed.png')";
  }
};

var closeModal = function closeModal() {
  if (modalMenu.classList.contains('mobile-site-navigation_active')) {
    burgerBtn.style.backgroundImage = "url('./images/icon-burger.png')";
    modalMenu.classList.toggle('mobile-site-navigation_active');
  } else {
    modalMenu.classList.toggle('mobile-site-navigation_active');
    burgerBtn.style.backgroundImage = "url('./images/icon-burger-closed.png')";
  }
};

modalAnchor.forEach(function (e) {
  e.addEventListener('click', closeModal);
});
burgerBtn.addEventListener('click', openModal);