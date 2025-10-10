const menuIcon = document.querySelector('.mobile-nav img');
const menuState = document.querySelector('.nav-list');
menuIcon.addEventListener('click', function(){
    menuState.classList.toggle('active');
});

const contactLink = document.querySelectorAll('.contacts .contact');

contactLink.forEach(contact =>{
    contact.addEventListener('click', () => {
        if(contact.classList.contains('telegram')){
            window.open(' ','_blank');  
        }
        else if(contact.classList.contains('github')){
            window.open('https://github.com/Frade11', '_blank');
        }
        else if(contact.classList.contains('instagram')){
            window.open('', '_blank');
        }
        else if(contact.classList.contains('whatsapp')){
            window.open('', '_blank');
        }
    })
})