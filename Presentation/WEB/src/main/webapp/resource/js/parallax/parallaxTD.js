$(document).ready(function () {
    var paraContain = "#timeDiv";
    makeDivColor(paraContain);

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();
        var scrollDiv = $(paraContain).children('div');
        var height = 0;
        for(var i = 0; i < scrollDiv.length; i++){
            var divId = scrollDiv.get(i).id;
            var data = $('#' + divId);
            var speedData = data.data('scroll');
            height += data.height();

            setDivScroll(scroll, data, speedData, height, i);
        }
    });

    function setDivScroll(scroll, data, speedData, height, i){
        var speed = 1;
        var cHeight = height - data.height();

        // 비율이 중요하다 slow 1 fast 150000
        switch (speedData) {
            case 'slow' :
                    speed = (cHeight - (scroll / 2));
                break;
            case 'fast' :
                speed = -(scroll / 300000);
                break;
        }

        data.css({top : speed+"px"});
    }
});