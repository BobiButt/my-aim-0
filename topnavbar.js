document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-l');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        burger.classList.toggle('toggle');
    });

    // Close dropdowns on mobile when clicking outside
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });

    // Toggle dropdowns on mobile
    const dropdowns = document.querySelectorAll('.nav-links li');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (event) => {
            if (window.innerWidth <= 768) {
                event.stopPropagation();
                const subMenu = dropdown.querySelector('.dropdown');
                if (subMenu) {
                    subMenu.classList.toggle('nav-active');
                }
            }
        });
    });
});
