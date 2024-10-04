let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    
    slideIndex = (slideIndex + 1) % totalSlides;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
