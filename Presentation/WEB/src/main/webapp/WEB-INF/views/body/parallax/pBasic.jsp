<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id = "parallaxB" class="parallax">
    <c:forEach var="i" begin="1" end="10">
        <div id="tempDiv${i}" class="relDiv divS10" >
            테스트_${i}
        </div>
    </c:forEach>
</div>
