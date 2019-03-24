$(document).ready(function () {

    makeDivColor(".divS10");

    $(window).scroll(function () {
       var scroll = $(this).scrollTop();
       setParallaxC(scroll);
   });
});