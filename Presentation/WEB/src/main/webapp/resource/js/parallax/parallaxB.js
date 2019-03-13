$(document).ready(function () {
    var paraContain = "#parallaxB"
    var data = $(paraContain).children('div');

    makeDivColor(paraContain);

    $(window).scroll(function () {
        var standard = $(this).scrollTop();
        //$("#"+ data.get(0).id).css('background-position-y', standard); // 배경만 변한다
        // $("#"+ data.get(0).id).css({"top": standard });

        var height = 0;
        for(var i = 0; i< data.length; i++){
            var className = $("#" + data.get(i).id);
            height += className.height();
            parallaxScroll(standard, className, height);
        }
    });

    function parallaxScroll(standard, selector, height) {
        var selHeight = selector.height();
        var relHeight = height - selHeight;
        if(standard >= relHeight){
            selector.css({'top' : (standard - relHeight)}); // ScrollTop - selector의 Top(로드시 처음 설정되는 TOP)
        }
    }

    $(window).resize(function () {
       var height = window.innerHeight;
       $('.iDiv').height(height);
    });
});