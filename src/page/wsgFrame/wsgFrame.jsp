<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--코드 header-->
<jsp:include page="../../../src/inc/common/header.jsp"></jsp:include>
<!--//코드 header-->
<style>
    .wsgFrame__layout{margin-bottom: 20px;}
    .wsgFrame__layout__title{font-size:14px; font-weight: bold; background: #333333; color: #fff; padding: 2px; margin-bottom: 5px;}
</style>

<div class="wsgFrame">
<%--
    <jsp:include page="../../../src/inc/uikit/_module/selectBox/selectBox.jsp">
        <jsp:param name="id" value="selectBox1"></jsp:param>
    </jsp:include>

    --%>


    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">입력 - 일반</p>
        <jsp:include page="../../../src/inc/uikit/_atom/form/input.jsp">
            <jsp:param name="type" value="text"></jsp:param>
            <jsp:param name="id" value="input1"></jsp:param>
            <jsp:param name="placeholder" value="id입력"></jsp:param>
        </jsp:include>
    </div>

    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">입력 - 비밀번호</p>
        <jsp:include page="../../../src/inc/uikit/_atom/form/input.jsp">
            <jsp:param name="type" value="password"></jsp:param>
            <jsp:param name="id" value="input2"></jsp:param>
            <jsp:param name="placeholder" value="비밀번호 입력"></jsp:param>
            <jsp:param name="isPwToggleFunc" value="true"></jsp:param>
        </jsp:include>
    </div>

    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">입력 - 입력불가</p>
        <jsp:include page="../../../src/inc/uikit/_atom/form/input.jsp">
            <jsp:param name="type" value="password"></jsp:param>
            <jsp:param name="id" value="input3"></jsp:param>
            <jsp:param name="placeholder" value="비밀번호 입력"></jsp:param>
            <jsp:param name="isPwToggleFunc" value="true"></jsp:param>
            <jsp:param name="isDisabled" value="true"></jsp:param>
        </jsp:include>
    </div>

    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">체크박스 - 기본</p>
        <jsp:include page="../../../src/inc/uikit/_atom/form/checkbox.jsp"></jsp:include>
    </div>

    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">체크박스 - 입력불가</p>
        <jsp:include page="../../../src/inc/uikit/_atom/form/checkbox.jsp">
            <jsp:param name="isDisabled" value="true"></jsp:param>
        </jsp:include>
    </div>
<%--
    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">탭 형식 배너</p>
        <jsp:include page="../../../src/inc/uikit/_template/tabBanner/tabBanner.jsp"></jsp:include>
    </div>--%>
</div>

<!--코드 footer-->
<jsp:include page="../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 footer-->