// search
document.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("open-search-form").addEventListener("click", (e) => {
    document.getElementById("search-form").classList.add("search-form_show");
    searchInput.focus();
  });

  document.getElementById("search-form-close").addEventListener("click", (e) => {
    document.getElementById("search-form").classList.remove("search-form_show");
    searchInput.value = "";
  });

  document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });
});


// burger
document.querySelector('.burger').addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active');
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {
    menu.classList.toggle('nav--active');
    document.body.classList.toggle('stop-scroll');
  })
menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    document.body.classList('stop-scroll')
  })
})


// swiper
const container = document.querySelector(".container")
const swiper = new Swiper(".hero__swiper", {
  // Default parameters
  loop: true,
  speed: 300,
  pagination: {
    el: ".hero__pagination",
    type: "bullets",
    clickable: true,
  },
})


// work-tab
let tabsBtn = document.querySelectorAll('.work-tab__btn');
let tabsItem = document.querySelectorAll('.work-tab__items');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('btn-tabs--active') });
    e.currentTarget.classList.add('btn-tabs--active');

    tabsItem.forEach(function (element) { element.classList.remove('work-tab--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('work-tab--active');
  });
});


// accordion
$(function () {
  $("#accordion").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
  })
})
