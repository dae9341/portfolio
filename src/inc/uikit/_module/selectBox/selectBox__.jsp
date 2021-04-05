<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/__header.jsp"></jsp:include>
<!--//코드 header-->
<div class="wsgFrame">
    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">디자인 셀렉트 - 기본</p>
        <jsp:include page="selectBox.jsp">
            <jsp:param name="id" value="selectBoxWSG1"></jsp:param>
        </jsp:include>
    </div>
    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">디자인 셀렉트 - 비활성화</p>
        <jsp:include page="selectBox.jsp">
            <jsp:param name="id" value="selectBoxWSG2"></jsp:param>
            <jsp:param name="isDisabled" value="true"></jsp:param>
        </jsp:include>
    </div>

</div>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 header-->
