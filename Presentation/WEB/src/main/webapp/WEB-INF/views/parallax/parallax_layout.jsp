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
    <div id="div1" class="iDiv iDiv1" >focus1</div>
    <div id="div2" class="iDiv iDiv2">focus2</div>
    <div id="div3" class="iDiv iDiv3">focus3</div>

<%--  <c:forEach var="i" begin="1" end="10">
        <div id="div${i}" class="iDiv iDiv1" >테스트_${i}<br>
            테스트_${i}<br>
            테스트_${i}<br>
            테스트_${i}<br>
            테스트_${i}<br>
            테스트_${i}<br>
            테스트_${i}<br>
            테스트_${i}<br>
            테스트_${i}<br>
        </div>
    </c:forEach>--%>
</body>
    <tiles:insertAttribute name="footer"/>
</html>