document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides-container');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetSlide = document.getElementById(targetId);
            const targetIndex = [...slidesContainer.children].indexOf(targetSlide);
            const offset = -100 * targetIndex;

            slidesContainer.style.transform = `translateX(${offset}vw)`;
        });
    });
});
