<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html; charset=utf-8"%>
<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <tiles:insertAttribute name="header"/>
</head>
<body>
    <div id="timeDiv">
        <div id="tempDiv1" class="iDivBase"         data-scroll = 'fast'>테스트_1</div>
        <div id="tempDiv2" class="iDivSmall"    data-scroll = 'slow'>테스트_2</div>
        <div id="tempDiv3" class="iDivBase"         data-scroll = 'fast'>테스트_3</div>
    </div>

</body>
    <tiles:insertAttribute name="footer"/>
</html>