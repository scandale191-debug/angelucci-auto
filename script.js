let index = 0;

function changeSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    slides[index].classList.remove('active');
    index = (index + step + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(() => changeSlide(1), 6000);
