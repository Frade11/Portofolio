const menuIcon = document.querySelector('.mobile-nav img')
const menuState = document.querySelector('.nav-list');
menuIcon.addEventListener('click', function(){
    menuState.classList.toggle('active');
});