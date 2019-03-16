/**Other**/
// 화면 RESIZE
    $(window).resize(function () {
           var height = window.innerHeight;
           $('.iDiv').height(height);
    });
/**Other END**/
/** Parallax Basic Setting **/

function setParallaxB(data, scroll){
    var height = 0;

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
function setParallaxTD(data, scroll){
    var height = 0;
    for(var i = 0; i < data.length; i++){
        var selector = $('#' + data.get(i).id);
        var speedData = selector.data('scroll');
        height += selector.height();

        setDivScroll(scroll, selector, speedData, height);
    }
}

function setDivScroll(scroll, selector, speedData, height){
        var speed = 1;
        var cHeight = height - selector.height();

        // 비율이 중요하다 slow 1 fast 150000
        switch (speedData) {
            case 'slow' :
                    speed = (cHeight - (scroll / 2));
                break;
            case 'fast' :
                speed = -(scroll / 300000);
                break;
        }

        selector.css({top : speed+"px"});
    }
/** Parallax Time Different Setting END **/