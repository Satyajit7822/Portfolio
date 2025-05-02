menu = document.querySelector('.menu i');
navbar = document.querySelector('.header .navbar');

menu.onclick=()=>{
    navbar.classList.toggle('active');
} 

const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.3
    });

    skillCards.forEach(card => {
        observer.observe(card);
    });