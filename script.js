document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.menu-button');
    const sections = document.querySelectorAll('.content-section');

    // Set the first button as active by default
    buttons[0].classList.add('active');
    // Show the first section by default
    sections[0].classList.add('active');

    // Add event listeners for buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            // Get the target section
            const targetSection = button.getAttribute('data-target');
            // Show the corresponding section
            document.getElementById(targetSection).classList.add('active');
        });
    });
});
