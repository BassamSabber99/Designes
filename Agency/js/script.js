var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}
var x = document.getElementById("up");
var nav = document.getElementById("navbar");
window.onscroll = function(){
    if(scrollY > 780){
        nav.style.backgroundColor = "rgba(67, 71, 156)";
        x.style.display = 'block';
    }
    else{
        nav.style.backgroundColor = "rgba(67, 71, 156, 0)";
        x.style.display = 'none';
    }
}
function scrollto(){
    window.scrollTo(0,0);
}
