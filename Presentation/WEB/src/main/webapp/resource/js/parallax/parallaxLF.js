$(document).ready(function () {
    var parentContain = "#LFMove_l";
    makeDivColor(parentContain);

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
    });
});