<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=utf-8"%>

<table class="tableV1">
    <tr>
        <th colspan="6"> 게시판( feat.Table tag )</th>
    </tr>
    <tr>
        <th>Number</th>
        <th>Category</th>
        <th>Title</th>
        <th>Writer</th>
        <th>Views</th>
        <th>Date</th>
    </tr>
    <c:forEach var="i" begin="1" end="10">
        <tr>
            <td>${i}</td>
            <td>category</td>
            <td>title_${i}</td>
            <td>writer_${i}</td>
            <td>views_${i}</td>
            <td>date_${i}</td>
        </tr>
    </c:forEach>
    <tr>
        <td colspan="6">
            <c:forEach var="i" begin="1" end="10">
                ${i}
            </c:forEach>
        </td>
    </tr>
</table>