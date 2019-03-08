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
        $("#"+ data.get(0).id).css({"top": standard });
      //  console.log(standard);
        for(var i = 1; i< data.length-1; i++){
            var className = data.get(i).id;
            parallaxScroll(standard, $("#" + className));
        }
    });

    function parallaxScroll(standard, selector) {
        var top = selector.offset().top;

        if(standard >= top ){
            console.log(top + ' / ' + standard + ' / ' + (standard - top));
            //selector.css({'top' : (standard - top)});
        }else{
        //    selector.css({'top' : 0 });
        }
    }

    function getRandInt(){
        return Math.floor(Math.random() * (256)) + 0;
    }
});