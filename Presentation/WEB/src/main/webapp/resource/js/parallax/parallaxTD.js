$(document).ready(function () {
    var paraContain = "#timeDiv";
    makeDivColor(paraContain);

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();
        setParallaxTD(paraContain, scroll);
    });
});