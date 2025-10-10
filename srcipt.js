const menuIcon = document.querySelector('.mobile-nav img');
const menuState = document.querySelector('.nav-list');
menuIcon.addEventListener('click', function(){
    menuState.classList.toggle('active');
});

const contactLink = document.querySelectorAll('.contacts .contact img');

contactLink.forEach(icon =>{
    icon.addEventListener('click', () => {
        switch(icon.className){
            case 'telegram':
                window.open(' ','_blank');
                break;
            case 'github':
                window.open('https://github.com/Frade11', '_blank');
                break;
            case 'instagram':
                window.open('','_blank');
                break;
            case 'whatsapp':
                window.open(' ','_blank');
                break;
        }
    })
})