var searchBar=document.querySelector('.search-bar-container');
var searchBtn=document.querySelector('#search-btn');
var menuBtn=document.querySelector('#menu-btn');
var navBar=document.querySelector('.navbar');
var imgBtn=document.querySelectorAll('.img-btn');

var formBtn=document.querySelector('#login-btn');
var loginForm=document.querySelector('.login-form-container');
var formClose=document.querySelector('#form-close');


window.onscroll=()=>{
    searchBar.classList.remove('active');
    navBar.classList.remove('active');
    searchBtn.classList.remove('fa-times');
    menuBtn.classList.remove('fa-times');
    loginForm.classList.remove('active');
}

searchBtn.addEventListener('click',()=>{
    searchBar.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
})

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})

imgBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#image-slider').src=src;
    });
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
})

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
})

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
  });