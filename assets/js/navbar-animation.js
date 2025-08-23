document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const animatedIcon = document.querySelector('.animated-icon');

    navbarToggler.addEventListener('click', function() {
    animatedIcon.classList.toggle('open');
    });
});