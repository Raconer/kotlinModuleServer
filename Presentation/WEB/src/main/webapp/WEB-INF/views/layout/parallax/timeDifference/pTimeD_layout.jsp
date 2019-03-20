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
        <%--<div id="div1" class="iDiv iDiv1" >focus1</div>--%>
        <div id="timeDiv" class="parallax">
            <div id="tempDiv1" class="relDiv DivS10" data-scroll = '1' >테스트_1</div>
            <div id="tempDiv2" class="relDiv DivS5"  data-scroll = '5' >테스트_2</div>
            <div id="tempDiv3" class="relDiv DivS10" data-scroll = '1' >테스트_3</div>
            <div id="tempDiv4" class="relDiv DivS5"  data-scroll = '2' >테스트_4</div>
            <div id="tempDiv5" class="relDiv DivS10" data-scroll = '4' >테스트_5</div>
            <div id="tempDiv6" class="relDiv DivS5"  data-scroll = '2' >테스트_6</div>
        </div>
    </body>
    <tiles:insertAttribute name="footer"/>
</html>