









var images = [];
var i = 0;

images[0] = "images/slide_1.jpg";
images[1] = "images/slide_2.jpg";
images[2] = "images/slide_3.jpg";
images[3] = "images/slide_4.jpg";

function changeimg(){
   document.getElementById("s").src = images[i];
  if(i < images.length-1){
     i++;
  }
   else{
     i = 0;
    }
   // setTimeout('changeimg()',10000);
}
window.onload = changeimg();
function changenext(){
   changeimg(i);
}
function changeprev(){
   
   if(i > images.length-1){
      i--;
   }
    else{
      i = 3;
     }
     document.getElementById("s").src = images[i];
     
}


var slideIndex = 0;
showSlides(slideIndex);

function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   //console.log(slideIndex);
   slides[slideIndex].style.display = "block";  
   dots[slideIndex].className += " active";
 }

 $(document).ready(function(){
    var navbar = $("#navbar");
    var head =$("#head");
    var link = $("#list");
    $(document).scroll(function(){
      if(scrollY > 600){
        navbar.css({
          "position":"fixed",
          "background-color":"white",
          "box-shadow":"1px 1px 20px black"
        });
        head.css("color","crimson");
        //we will put style for links here.....
        navbar.fadeIn();
      }
      else{
        navbar.css({
          "position":"relative",
          "background-color":"transparent",
          "box-shadow":""
        });
        head.css("color","white");
      }
      console.log(scrollY);
    });



















    $("#next").click(function(){
       var currentImg = $('.active');
       var nextImg = currentImg.next();
       var firstImg = $('#fi');
       if(nextImg.length > 0){
         currentImg.toggleClass('active').css('z-index','-10');
         nextImg.fadeIn("slow");
         nextImg.addClass('active').css('z-index','10');
         
     }else{
         currentImg.toggleClass('active');
         firstImg.addClass('active');
     }
    });
    $('#prev').click(function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
      var lastImg = $('#la');
      if(prevImg.length > 0){
          currentImg.toggleClass('active').css('z-index','-10');
          prevImg.fadeIn("slow");
          prevImg.addClass('active').css('z-index','10')
      }else{
          currentImg.toggleClass('active').css('z-index','-10');
          prevImg.fadeIn("slow");
          lastImg.addClass('active').css('z-index','10')
      }
  });
 });