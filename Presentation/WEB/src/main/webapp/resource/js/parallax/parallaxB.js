$(document).ready(function () {

    var data = $("#parallaxB").children('div');

    // div 랜덤 색상 입히기
    for(var i = 0; i < data.length; i++){
        var tempSelect = data.get(i).id;
        var R = getRandInt();
        var G = getRandInt();
        var B = getRandInt();
        $('#'+tempSelect).css({ backgroundColor : "rgb("+R+","+G+","+B+")"});
    }

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

    function getRandInt(){
        return Math.floor(Math.random() * (256)) + 0;
    }
});