// parallax 만들어야할 function 속도 조절
var standardScroll = $(window).scrollTop();

function setScrollUpDown(scroll){
    scroll = standardScroll - scroll > 0? -scroll: scroll;
    standardScroll = scroll;
    return scroll;
}
/**Other**/
// 화면 RESIZE
    $(window).resize(function () {
           var height = window.innerHeight;
           $('.iDiv').height(height);
    });
/**Other END**/
/** Parallax Basic Setting **/

function setParallaxB(parentDiv, scroll){

    var parent = $(parentDiv);
    var root = parent.children('div');
    var height = parent.offset().top;

    for(var i = 0; i< root.length; i++){
        var selector = $("#" + root.get(i).id);
        height += selector.height();
        parallaxScroll(scroll, selector, height);
    }
}

function parallaxScroll(selector, scroll, height) {
    var selHeight = selector.height();
    var relHeight = height - selHeight;
    if(scroll >= relHeight){
        selector.css({'top' : (scroll - relHeight)}); // ScrollTop - selector의 Top(로드시 처음 설정되는 TOP)
    }
}
/** Parallax Basic Setting END**/

/** Parallax Time Different Setting **/
function setParallaxTD(parentDiv, scroll){
    var parent = $(parentDiv);
    var root = parent.children('div');
    var height = parent.offset().top;

    for(var i = 0; i < root.length; i++){
        var selector = $('#' + root.get(i).id);
        var speedData = selector.data('scroll');

        setDivScroll(selector, scroll, speedData, height, i);
    }
}

function setDivScroll(selector, scroll, speedData){
        var speed = ( scroll * - (speedData/10) ) + "px";
        selector.css({top :speed});
}
/** Parallax Time Different Setting END **/

/** Parallax Center Setting  **/
function setParallaxC(parentDiv, scroll) {
    var parent = $(parentDiv);
    var root = parent.children('div');
    for(var i = 0; i < root.length; i++){
        var child = $('#' + root.get(i).id).children('div');
        for(var j = 0; j < child.length; j++){
            var data = $('#' + child.get(j).id);
            setCScroll(data, scroll);
        }
    }
}

function setCScroll(data, scroll) {
    var top = data.offset().top;
    var speed = top + (setScrollUpDown(scroll) * - (5/10) ) + "px";
    console.log(speed)
    data.css({top : speed})
}
/** Parallax Center Setting END **/

//background-position:
// padding-top