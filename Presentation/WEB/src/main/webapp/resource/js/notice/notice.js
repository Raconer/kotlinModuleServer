$(document).ready(function () {

    readNoticeTemplate(id);
    function readNoticeTemplate(id){
        $.ajax({
            type:"GET",
            url : "/notice" ,
            data : { id : id },
            contentType: "application/json; charset=UTF-8" ,
            dataType : "text",
            success : function (data) {
                $("#noticeList").append(data);
                //document.getElementById("#noticeList").append(data);
            },
            error : function () {
                alert("notice template read error");
            }
        });
    }
});

