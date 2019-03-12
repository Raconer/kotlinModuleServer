$(document).ready(function () {
    var paraContain = "#timeDiv";
    makeDivColor();

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();
        var scrollDiv = $(paraContain).children('div');
        var height = 0;
        for(var i = 0; i < scrollDiv.length; i++){
            var divId = scrollDiv.get(i).id;
            var data = $('#' + divId);
            var speedData = data.data('scroll');
            height += data.height();

            setDivScroll(scroll, data, speedData, height);
        }
    });

    function setDivScroll(scroll, data, speedData, height){
        var speed = 1;
        var dataTop = data.offset().top;
        var cHeight = height - data.height();
        switch (speedData) {
            case 'slow' :
                speed = (cHeight - dataTop - scroll);
                console.log(cHeight +' - '+  dataTop + ' - '+ scroll+' = ' + speed);
                data.css({top : dataTop + speed * 0.3});
                break;
            case 'fast' :
                speed = (scroll - dataTop);
                console.log(cHeight +' - '+  dataTop + ' - '+ scroll+' = ' + speed);
                data.css({top :  speed });
                break;
        }
    }

    function makeDivColor(){
        var chilDiv = $(paraContain).children('div');

        for(var i = 0; i <  chilDiv.length; i++){
            var childId = chilDiv.get(i).id;
            var R = randNum();
            var G = randNum();
            var B = randNum();
            $('#' + childId).css({backgroundColor : "rgb("+R+","+G+","+B+")"});
        }
    }
    function randNum() {
        return Math.floor(Math.random() * (256)) + 0;
    }
});