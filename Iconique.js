let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

ScrollReveal({
    reset: true,
    distance: '75px',
    duration: 1750,
    delay: 250,
});

ScrollReveal().reveal('.home-content, .heading, .discography-container', { origin: 'top' });
ScrollReveal().reveal('.home-img, .music-video p, .music-video-button, .music-video-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const home = new Typed('.multiple-home', {
    strings: ['Be Iconic!', 'Be Unique!', 'Be You!'],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 1000, 
    loop: true
})

const about = new Typed('.multiple-about', {
    strings: ['Maria Frances Gilianne Posadas', 'Kathleen Zingapan', 'Donamarielle Panaligan', 'Hannah Kim Parungao'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})