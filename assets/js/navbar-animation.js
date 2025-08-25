document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const animatedIcon = document.querySelector(".animated-icon");
    const navbar = document.querySelector('.navbar');
    const navbarContainer = document.querySelector('.navbar .container');

    navbarToggler.addEventListener("click", function () {
        animatedIcon.classList.toggle("open");
    });

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            navbar.classList.add('navbar-scrolled');
            navbarContainer.classList.add('no-border');
        } else {
            navbar.classList.add('navbar-custom');
            navbar.classList.remove('navbar-scrolled');
            navbarContainer.classList.remove('no-border');
        }
    });
});
