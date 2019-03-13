<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html; charset=utf-8"%>
<!doctype html>
<html lang="ko">
<head>
    <title>Document</title>
    <tiles:insertAttribute name="header"/>
</head>
<body>
    <div id="LFMove_l">
        <c:forEach var="i" begin="1" end="10">
            <div id="LFDiv${i}" class="iDiv">
                테스트_${i}
            </div>
        </c:forEach>
    </div>
</body>
    <tiles:insertAttribute name="footer"/>
</html>