// parallax 만들어야할 function 속도 조절
var standardScroll = $(window).scrollTop();

function setScrollUpDown(scroll){
    var tempScroll= scroll;
    if(standardScroll > tempScroll){
        tempScroll = -tempScroll
    }
    standardScroll = scroll;
    return tempScroll;
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
        var rootSel = $('#' + root.get(i).id);
        var child = rootSel.children('div');
        var rootTop = rootSel.offset().top;
        for(var j = 0; j < child.length; j++){
            var data = $('#' + child.get(j).id);
            setCScroll(data, scroll, rootTop);
        }
    }
}

function setCScroll(data, scroll, rootTop) {
    //console.log((rootTop-(scroll* .5)) +'/' +scroll +'/' + rootTop)
    var margintop = data.css("margin-top");
    var top = data.offset().top;
    console.log( (margintop +  (scroll* .5)+'px'));
    data.css("margin-top", ((margintop +  (scroll* .5)+'px')));

}
/** Parallax Center Setting END **/