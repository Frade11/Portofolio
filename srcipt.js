const menuIcon = document.querySelector('.mobile-nav img');
const menuState = document.querySelector('.nav-list');
menuIcon.addEventListener('click', function(){
    menuState.classList.toggle('active');
});

const contactLink = document.querySelectorAll('.contacts .contact');
const alertMessage = document.querySelector('.account-not-linked');

contactLink.forEach(contact =>{
    contact.addEventListener('click', () => {
        if(contact.classList.contains('telegram')){
            // window.open(' ','_blank');  
            accountNotLinked();
        }
        else if(contact.classList.contains('github')){
            window.open('https://github.com/Frade11', '_blank');
        }
        else if(contact.classList.contains('instagram')){
            // window.open('', '_blank');
            accountNotLinked();
        }
        else if(contact.classList.contains('whatsapp')){
            // window.open('', '_blank');
            accountNotLinked();
        }
    })
})

function accountNotLinked(){
    alertMessage.style.display = 'block'; 
      alertMessage.style.animation = 'fadeIn 0.5s ease forwards';
         setTimeout(() => {
          alertMessage.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => {
         alertMessage.style.display = 'none';
    }, 500); 
      },3000)

}


let cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
},
{
    threshold: 0.5
});
cards.forEach(card => observer.observe(card));

const talkBtn = document.querySelector('.right-nav');

talkBtn.addEventListener('click', () =>{
    window.scrollTo({
    top: 0,
    top: document.body.scrollHeight,
    behavior: "smooth"
});
})

const scrollTopBtn = document.querySelector('.scroll-top');

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        scrollTopBtn.style.display = 'block';
    }else{
        scrollTopBtn.style.display = 'none';
    }
}
scrollTopBtn.addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
})