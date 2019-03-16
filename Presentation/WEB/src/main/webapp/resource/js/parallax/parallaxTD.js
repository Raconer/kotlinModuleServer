$(document).ready(function () {
    var paraContain = "#timeDiv";
    makeDivColor(paraContain);

    $(window).scroll(function () {
        var data = $(paraContain).children('div');
        var scroll = $(this).scrollTop();
        setParallaxTD(data, scroll);
    });
});