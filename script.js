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

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            var headerOffset = 70;
            var elementPosition = targetElement.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
    var carousel = document.querySelector('#mainCarousel');
    carousel.addEventListener('slid.bs.carousel', function () {
        var activeCaption = carousel.querySelector('.carousel-item.active .carousel-caption');
        activeCaption.classList.remove('animate__fadeIn');
        void activeCaption.offsetWidth; // Trigger a reflow
        activeCaption.classList.add('animate__fadeIn');
    });
});