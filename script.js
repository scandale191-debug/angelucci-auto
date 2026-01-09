let index = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(step) {
    slides[index].classList.remove('active');
    index = (index + step + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(() => changeSlide(1), 6000);
