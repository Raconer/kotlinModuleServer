$(document).ready(function () {
    var parent = ".parallax";
    makeDivColor(".divS10");

    $(window).scroll(function () {
       var scroll = $(this).scrollTop();
       setParallaxC(parent, scroll);
   });
});