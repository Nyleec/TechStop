
    // Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll('.pirate-map span'); // Select all the dashes, waves, and X
        let delay = 0; // Initial delay time

        // Loop through each element and apply the animation
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 1; // Show the element by setting opacity to 1
                element.style.transition = 'opacity 0.5s ease'; // Smooth fade-in effect
            }, delay);
            delay += 500; // Increment delay for next element (500ms between each step)
        });
    });

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
    