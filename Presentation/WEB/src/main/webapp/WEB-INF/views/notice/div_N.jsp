<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="t">
    <div class="tCap">
        게시판( feat.DIV tag )
    </div>
    <div class="tHeader">
        <div>Number</div>
        <div>Category</div>
        <div>Title</div>
        <div>Writer</div>
        <div>Views</div>
        <div>Date</div>
    </div>
    <c:forEach var="i" begin="1" end="10">
        <div class="tRow">
            <div>${i}</div>
            <div>category</div>
            <div>title_${i}</div>
            <div>writer_${i}</div>
            <div>views_${i}</div>
            <div>date_${i}</div>
        </div>
    </c:forEach>
</div>
<div class="tFooter">
    <c:forEach var="i" begin="1" end="10">
        ${i}
    </c:forEach>
</div>