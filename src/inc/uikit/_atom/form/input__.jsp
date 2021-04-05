<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/__header.jsp"></jsp:include>
<!--//코드 header-->
<div class="wsgFrame">
    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">입력 - 기본</p>
        <jsp:include page="input.jsp">
            <jsp:param name="type" value="text"></jsp:param>
            <jsp:param name="id" value="input1"></jsp:param>
            <jsp:param name="placeholder" value="id입력"></jsp:param>
        </jsp:include>
    </div>


    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">입력 - 비밀번호</p>
        <jsp:include page="input.jsp">
            <jsp:param name="type" value="password"></jsp:param>
            <jsp:param name="id" value="input2"></jsp:param>
            <jsp:param name="placeholder" value="비밀번호 입력"></jsp:param>
            <jsp:param name="isPwToggleFunc" value="true"></jsp:param>
        </jsp:include>
    </div>

    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">입력 - 입력불가</p>
        <jsp:include page="input.jsp">
            <jsp:param name="type" value="password"></jsp:param>
            <jsp:param name="id" value="input3"></jsp:param>
            <jsp:param name="placeholder" value="비밀번호 입력"></jsp:param>
            <jsp:param name="isPwToggleFunc" value="true"></jsp:param>
            <jsp:param name="isDisabled" value="true"></jsp:param>
        </jsp:include>
    </div>

</div>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 header-->
