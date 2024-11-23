document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    
    var carousel = document.querySelector('#mainCarousel');
    carousel.addEventListener('slid.bs.carousel', function () {
        var activeCaption = carousel.querySelector('.carousel-item.active .carousel-caption');
        activeCaption.classList.remove('animate__fadeIn');
        void activeCaption.offsetWidth; // Trigger a reflow
        activeCaption.classList.add('animate__fadeIn');
    });
});

