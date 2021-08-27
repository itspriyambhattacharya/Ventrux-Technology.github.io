console.log("Test")
let navbar = document.querySelector('header')
console.log(navbar)
window.addEventListener('scroll', function () {
  navbar.classList.toggle('sticky', this.window.scrollY > 0);
})


// Swiper Js Starts

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  }
});

// Swiper Js Ends


let menuBar = document.querySelector('.menu');
let menuClose = document.querySelector('.close');
let navLinks = document.querySelector('.nav-links');
console.log(menuBar);
console.log(menuClose);
console.log(navLinks);
menuBar.addEventListener('click', function () {
  navLinks.classList.add('show');
  menuBar.classList.add('d-none');
  menuClose.classList.add('d-block');
})

menuClose.addEventListener('click', function () {
  navLinks.classList.remove('show');
  menuBar.classList.remove('d-none');
  menuClose.classList.remove('d-block');
})


let home = document.getElementById('home');
console.log(home);

home.addEventListener('click' , function(){
	location.reload();
})

let logo = document.querySelector('#logo');
console.log(logo);
logo.addEventListener('click' , function(){
	location.reload();
})

window.onload = function () {
  window.scrollTo(0, 0);
  home.classList.add('active');
}

let linksNav = document.getElementsByClassName('links-nav');
let a = Array.from(linksNav);

for (let i = 1; i < a.length; i++) {
  a[i].addEventListener('click', function () {
    for (let j = 0; j < a.length; j++) {
      a[j].classList.remove('active');
    }
    a[i].classList.add('active');
    navLinks.classList.remove('show');
    menuBar.classList.remove('d-none');
    menuClose.classList.remove('d-block');
  });
}

console.log(linksNav);
console.log(a);