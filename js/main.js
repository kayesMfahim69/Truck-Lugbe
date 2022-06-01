
// scroll top button
const btnScrollTop = document.querySelector("#btnScrollTop");
btnScrollTop.addEventListener("click",function(){
$("html,body").animate({scrollTop:0},"slow");
});

$(window).scroll(function(){
    if ($(this).scrollTop()>600){
        $("#btnScrollTop").fadeIn();

    }else {
        $("#btnScrollTop").fadeOut();
    }
});

// menu scroll js

$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.navbar').addClass('menubg');
    }
    else {
      $('.navbar').removeClass('menubg');
    }
  });