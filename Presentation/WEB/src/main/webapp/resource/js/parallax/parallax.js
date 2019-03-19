/**Other**/
// 화면 RESIZE
    $(window).resize(function () {
           var height = window.innerHeight;
           $('.iDiv').height(height);
    });
/**Other END**/
/** Parallax Basic Setting **/

function setParallaxB(paraContain, scroll){

    var parent = $(paraContain);
    var data = parent.children('div');
    var height = parent.offset().top;

    for(var i = 0; i< data.length; i++){
        var selector = $("#" + data.get(i).id);
        height += selector.height();
        parallaxScroll(scroll, selector, height);
    }
}

function parallaxScroll(scroll, selector, height) {
    var selHeight = selector.height();
    var relHeight = height - selHeight;
    if(scroll >= relHeight){
        selector.css({'top' : (scroll - relHeight)}); // ScrollTop - selector의 Top(로드시 처음 설정되는 TOP)
    }
}
/** Parallax Basic Setting END**/

/** Parallax Time Different Setting **/
function setParallaxTD(paraContain, scroll){
    var parent = $(paraContain);
    var data = parent.children('div');
    var height = parent.offset().top;

    for(var i = 0; i < data.length; i++){
        var selector = $('#' + data.get(i).id);
        var speedData = selector.data('scroll');

        setDivScroll(scroll, selector, speedData, height, i);
    }
}

function setDivScroll(scroll, selector, speedData){
        var speed = ( scroll * -(speedData/10) ) + "px";
        selector.css({top :speed});
}
/** Parallax Time Different Setting END **/