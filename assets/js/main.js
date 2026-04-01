document.addEventListener('DOMContentLoaded', () => {
    // Top Bar Hamburger Menu Toggle for Mobile
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.getElementById('sidebar');

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }

    // Optional: Close menu when clicking outside (on small screens)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (sidebar && sidebar.classList.contains('open') && 
                !sidebar.contains(e.target) && 
                !hamburgerBtn.contains(e.target)) {
                
                sidebar.classList.remove('open');
            }
        }
    });

    // Initialize Slider on Gallery HTML
    const gallerySplide = document.querySelector('.splide');
    if (gallerySplide && typeof Splide !== 'undefined') {
        new Splide(gallerySplide, {
            type       : 'loop',
            perPage    : 1,
            autoplay   : true,
            interval   : 3500,
            arrows     : true,
            pagination : true,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    arrows: false,
                }
            }
        }).mount();
    }
});
