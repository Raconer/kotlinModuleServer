<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=utf-8"%>

<div class="divN">
    게시판( feat.Table tag )
    <div class="divNH">
        <div>Number</div>
        <div>Category</div>
        <div>Title</div>
        <div>Writer</div>
        <div>Views</div>
        <div>Date</div>
    </div>
    <c:forEach var="i" begin="1" end="10">
        <div class="dTV1">
            <div>${i}</div>
            <div>category</div>
            <div>title_${i}</div>
            <div>writer_${i}</div>
            <div>views_${i}</div>
            <div>date_${i}</div>
        </div>
    </c:forEach>
    <div>
        <div>
            <c:forEach var="i" begin="1" end="10">
                ${i}
            </c:forEach>
        </div>
    </div>
</div>

