let index=0;
const slides=document.querySelectorAll(".slide");

function showSlide(i){
slides.forEach(s=>s.classList.remove("active"));
slides[i].classList.add("active");
}
function nextSlide(){
index=(index+1)%slides.length;
showSlide(index);
}
function prevSlide(){
index=(index-1+slides.length)%slides.length;
showSlide(index);
}
setInterval(nextSlide,5000);

const track=document.querySelector(".featured-track");
function scrollFeatured(dir){
track.scrollBy({left:dir*450,behavior:"smooth"});
}


