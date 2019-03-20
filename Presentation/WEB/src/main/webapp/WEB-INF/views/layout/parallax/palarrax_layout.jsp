<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/views/common/taglib.jsp"%>
<%--
  Created by IntelliJ IDEA.
  User: dhokim
  Date: 2019-03-20
  Time: 오후 6:36
  To change this template use File | Settings | File Templates.
--%>
<!doctype html>
<html lang="ko">
    <head>
        <title>Document</title>
        <tiles:insertAttribute name="common_h"/>
        <tiles:insertAttribute name="header"/>
    </head>
    <body>
        <tiles:insertAttribute name="body"/>
    </body>
    <tiles:insertAttribute name="common_f"/>
    <tiles:insertAttribute name="footer"/>
</html>