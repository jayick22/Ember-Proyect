window.addEventListener('scroll', () => {
    const navbar = document.getElementById('home-nav-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});