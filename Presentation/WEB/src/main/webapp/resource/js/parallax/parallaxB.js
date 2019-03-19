$(document).ready(function () {
    var paraContain = "#parallaxB"
    makeDivColor(paraContain);

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();
        setParallaxB(paraContain, scroll);

    });
});

//$("#"+ data.get(0).id).css('background-position-y', standard); // 배경만 변한다
// $("#"+ data.get(0).id).css({"top": standard });