<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--코드 header-->
<jsp:include page="../../../src/inc/common/header.jsp"></jsp:include>
<!--//코드 header-->
<style>

</style>

<div class="wsgFrame">
<%--
    <jsp:include page="../../../src/inc/uikit/_module/selectBox/selectBox.jsp">
        <jsp:param name="id" value="selectBox1"></jsp:param>
    </jsp:include>

    --%>


    <jsp:include page="../../../src/inc/uikit/_atom/form/input.jsp">
        <jsp:param name="type" value="text"></jsp:param>
        <jsp:param name="id" value="input1"></jsp:param>
        <jsp:param name="placeholder" value="id입력"></jsp:param>
    </jsp:include>

    <jsp:include page="../../../src/inc/uikit/_atom/form/input.jsp">
        <jsp:param name="type" value="password"></jsp:param>
        <jsp:param name="id" value="input2"></jsp:param>
        <jsp:param name="placeholder" value="비밀번호 입력"></jsp:param>
    </jsp:include>
</div>

<!--코드 footer-->
<jsp:include page="../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 footer-->