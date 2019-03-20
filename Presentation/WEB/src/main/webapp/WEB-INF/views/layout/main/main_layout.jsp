<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/views/common/taglib.jsp"%>
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