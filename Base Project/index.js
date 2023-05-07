let menuIcon = document.getElementById('menu-item');
let navbar = document.querySelector('.navbar');
let links = document.querySelectorAll('.navbar a')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-plus');
    navbar.classList.toggle('active');
};

// Add event listener to each link
links.forEach(link => {
    link.addEventListener('click', () => {
        // toggle 'active' class on navbar
        menuIcon.classList.toggle('fa-plus');
        navbar.classList.toggle('active');
    });
});



ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 3000,
    delay: 200,
    opactiy: 0.5
});

ScrollReveal().reveal('.home-content, .heading, .portfolio-box', {origin: 'top'})
ScrollReveal().reveal('.portfolio-box', {origin: 'left'})