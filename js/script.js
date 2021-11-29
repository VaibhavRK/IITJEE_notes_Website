burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
nav_list = document.querySelector('.nav-list');
right_nav = document.querySelector('.right-navlist');

burger.addEventListener('click',()=>{
    nav_list.classList.toggle('v-nav');
    right_nav.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
})
