<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/views/common/taglib.jsp"%>
    <%--
      Created by IntelliJ IDEA.
      User: dhokim
      Date: 2018-10-23
      Time: 오후 5:51
      To change this template use File | Settings | File Templates.
    --%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" id="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>
        <tiles:insertAttribute name="title"/>
    </title>
    <tiles:insertAttribute name="common_h"/>
    <tiles:insertAttribute name="header"/>
</head>
<body>
    <div class="bContainer">
        <div class="bHead">
            <div class="bCenContent">
                머리
                <%--<tiles:insertAttribute name="head"/>--%>
            </div>
        </div>
        <div class="bMain">
            <tiles:insertAttribute name="body"/>
        </div>
        <div class="bFooter">
            <div class="bCenContent">
                발
            </div>
        </div>
    </div>
</body>
<tiles:insertAttribute name="common_f"/>
<tiles:insertAttribute name="footer"/>
</html>
