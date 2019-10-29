new WOW().init();
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }



  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });




  var x = document.getElementById("up");
  window.onscroll = function(){
      if(scrollY > 780){
          x.style.display = 'block';
      }
      else{
          x.style.display = 'none';
      }
  }
  function scrollto(){
      window.scrollTo(0,0);
  }
  

  

$(document).ready(function(){
  $("#main").on('click',function(){
   $("#dishes").css("display","block");
   $("#dishes1").css("display","block");
   $("#dessert").css("display","none");
   $("#dessert1").css("display","none");
   $("#drink").css("display","none");
   $("#drink1").css("display","none");
   $("#main").addClass("toggle");
   $("#desserts").removeClass("toggle");
   $("#drinks").removeClass("toggle");
  });

  $("#desserts").on('click',function(){
    $("#dishes").css("display","none");
    $("#dishes1").css("display","none");
    $("#dessert").css("display","block");
    $("#dessert1").css("display","block");
    $("#drink").css("display","none");
    $("#drink1").css("display","none");
    $("#desserts").addClass("toggle");
    $("#drinks").removeClass("toggle");
    $("#main").removeClass("toggle");
   });

   $("#drinks").on('click',function(){
    $("#dishes").css("display","none");
    $("#dishes1").css("display","none");
    $("#dessert").css("display","none");
    $("#dessert1").css("display","none");
    $("#drink").css("display","block");
    $("#drink1").css("display","block");
    $("#drinks").addClass("toggle");
    $("#main").removeClass("toggle");
    $("#desserts").removeClass("toggle");
   });


});