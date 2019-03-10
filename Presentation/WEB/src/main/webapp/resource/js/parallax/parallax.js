$(document).ready(function () {
    var data = $("body").children('div');

    // div 랜덤 색상 입히기
    /*for(var i = 0; i < data.length; i++){
        var tempSelect = data.get(i).id;
        var R = getRandInt();
        var G = getRandInt();
        var B = getRandInt();
        $('#'+tempSelect).css({ backgroundColor : "rgb("+R+","+G+","+B+")"});
    }*/

    $(window).scroll(function () {
        var standard = $(this).scrollTop();
        //$("#"+ data.get(0).id).css('background-position-y', standard);
       // $("#"+ data.get(0).id).css({"top": standard });
       // $("#"+ data.get(0).id).css({"top": standard });
      //  console.log(standard);
        var height = 0;
        for(var i = 0; i< data.length; i++){
            var className = $("#" + data.get(i).id);
            height += className.height();
            parallaxScroll(standard, className, height, i);
        }
    });

    function parallaxScroll(standard, selector, height, i) {
        var top = selector.offset().top;
        var selHeight = selector.height();
        var relHeight = height - selHeight;

        console.log(i+' = '+standard +'/'+ relHeight +'/'+ (standard - relHeight) +'/' + top);

        if(standard > relHeight){
            selector.css({'top' : (standard - relHeight)});
        }
    }

    function getRandInt(){
        return Math.floor(Math.random() * (256)) + 0;
    }
});