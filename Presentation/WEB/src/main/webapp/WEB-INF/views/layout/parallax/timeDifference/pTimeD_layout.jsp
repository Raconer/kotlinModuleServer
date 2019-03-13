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
        <c:forEach var="i" begin="1" end="7">
            <div id="tempDiv${i}"       <c:choose >
                                            <c:when test="${i%2 gt 0}">
                                                class="iDivBase" data-scroll = 'fast'
                                            </c:when>
                                            <c:otherwise>
                                                class="iDivSmall" data-scroll = 'slow'
                                            </c:otherwise>
                                        </c:choose>
                        >테스트_${i}</div>
        </c:forEach>
    </div>
</body>
    <tiles:insertAttribute name="footer"/>
</html>