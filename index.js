console.log("Javascript loaded");
let slideIndex = 0;
const slides = document.querySelectorAll(".hero.slide");
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}   setInterval(nextSlide, 5000); // Change slide every 5 seconds