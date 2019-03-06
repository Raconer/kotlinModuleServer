$(document).ready(function () {


    readNoticeTemplate(templateID);

    function readNoticeTemplate(category){
        var nPath = "";

        switch (category) {
            case "1" :
                nPath = "Table";
                break;
            case "2":
                nPath = "Div";
                break;
        }

        $.ajax({
            type:"GET",
            url : "/notice" + nPath,
            dataType : "text",
            success : function (data) {
                $("#noticeList").append(data);
            },
            error : function () {
                alert("notice template read error");
            }
        });
    }
});

