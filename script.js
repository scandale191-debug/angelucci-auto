let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i){
slides.forEach(s=>s.classList.remove("active"));
slides[i].classList.add("active");
}
function nextSlide(){
slideIndex=(slideIndex+1)%slides.length;
showSlide(slideIndex);
}
function prevSlide(){
slideIndex=(slideIndex-1+slides.length)%slides.length;
showSlide(slideIndex);
}
setInterval(nextSlide,5000);

const track=document.querySelector(".featured-track");
function scrollFeatured(dir){
track.scrollBy({left:dir*500,behavior:"smooth"});
}
