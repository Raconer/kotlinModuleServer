$(document).ready(function () {
    var parentContain = "#LFMove_l";
    makeDivColor(parentContain);
    setZindex();
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
    });

    function setZindex(){
        var div = $(parentContain).children('div');
        for(var i = 0; i < div.length; i++){

        }
    }
});