let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

setInterval(()=>{
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
},6000);

const cars = document.getElementById("cars");
let offset = 0;

function scrollCars(dir){
  offset += dir * 280;
  offset = Math.max(Math.min(offset,0), -560);
  cars.style.transform = `translateX(${offset}px)`;
}
