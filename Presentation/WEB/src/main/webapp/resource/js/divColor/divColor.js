    function makeDivColor(paraContain){
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
