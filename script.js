document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('hidden'); // Toggle the 'hidden' class
    });

    const learnMoreButtons = document.querySelectorAll('.learn-more');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const moreInfo = button.nextElementSibling; // Get the next sibling (the .more-info div)
            if (moreInfo) {
                moreInfo.classList.toggle('hidden'); // Toggle the 'hidden' class
                moreInfo.style.display = moreInfo.style.display === 'block' ? 'none' : 'block'; // Toggle display
            }
        });
    });
});